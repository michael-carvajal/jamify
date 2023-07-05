from flask import Blueprint, request, render_template, redirect
from app.models import db, Demo
from flask_login import current_user, login_required
from app.api.aws_helpers import (
    upload_file_to_s3, get_unique_filename)
from app.forms.aws_form import DemoForm
from datetime import datetime

aws_routes = Blueprint("aws", __name__)

@aws_routes.route("/demo", methods=["POST"])
@login_required
def upload_image():
    form = DemoForm()

    if form.validate_on_submit():

        demo = form.data["demo"]
        demo.filename = get_unique_filename(demo.filename)
        upload = upload_file_to_s3(demo)

        if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
            return render_template("post_form.html", form=form, errors=[upload])
        data = request.json
        print("here is the data ========================>",data)
        url = upload["url"]
        new_demo = Demo(file_link= url, author_id=data.get('author_id'), public=data.get('public'), name=data.get('name'),
                        created_at=datetime.now())
        db.session.add(new_demo)
        db.session.commit()
        return new_demo.to_dict()

    if form.errors:
        print(form.errors)
        return render_template("post_form.html", form=form, errors=form.errors)

    return render_template("post_form.html", form=form, errors=None)
