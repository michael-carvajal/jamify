from flask import Blueprint, request, render_template, redirect
from app.models import db, Demo
from flask_login import current_user, login_required
from app.api.aws_helpers import (
    upload_file_to_s3, get_unique_filename, remove_file_from_s3)
from app.forms.aws_form import DemoForm
from datetime import datetime

aws_routes = Blueprint("aws", __name__)

@aws_routes.route("/demo", methods=["POST"])
@login_required
def upload_image():
    print("inside post demo form!!!!!!!!!!!!!!!!!!!!!!!")
    # data = request.get_json()

    print("here is the data ========================>",request)
    form = DemoForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        (print("Form has validatrd =================================================>"))
        demo = form.data["demo"]
        print(1111111111111111)
        demo.filename = get_unique_filename(demo.filename)
        print(222222222222222)
        print(demo.filename)
        upload = upload_file_to_s3(demo)
        print(333333333333333)
        print(upload)
        name = form.data['name']
        author_id = form.data['author_id']
        public = form.data['public']
        if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
            return {'error' : 'url is not in upload'},400   #render_template("post_form.html", form=form, errors=[upload])
        url = upload["url"]
        new_demo = Demo(file_link= url, author_id=author_id, public=public, name=name,
                        created_at=datetime.now())
        db.session.add(new_demo)
        db.session.commit()
        return new_demo.to_dict()

    if form.errors:
        print("errors in the form ++++++++++>")
        print(form.errors)
        return form.errors

    return {"error"}

@aws_routes.route("/demo/<int:id>", methods=["DELETE"])
@login_required
def deleteDemo(id):
    if request.method == "DELETE":
        data = request.get_json()
        print(data)
        link = data['file_link']
        print(link)
        demo_to_delete = Demo.query.get(id)
        print(demo_to_delete)
        remove_file_from_s3(link)
        db.session.delete(demo_to_delete)
        db.session.commit()
        return demo_to_delete.to_dict()
