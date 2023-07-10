from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Rating, db
from datetime import datetime
from app.forms import RatingForm

rating_routes = Blueprint('ratings', __name__)

@rating_routes.route('', methods = ['GET', 'POST'])
def getratings():

    if request.method == 'POST':
        form = RatingForm()

        form['csrf_token'].data = request.cookies['csrf_token']
        print('before                      validate')
        if form.validate_on_submit():
            print('before                      after')
            # Add the user to the session, we are logged in!
            author_id = form.data['author_id']
            songsheet_id = form.data['songsheet_id']
            rating = form.data['rating']
            comment = form.data['comment']
            created_at = form.data['created_at']
            updated_at = form.data['updated_at']
            new_rating = Rating(author_id=author_id,
                            songsheet_id=songsheet_id,
                            rating=rating,
                            comment=comment,
                            created_at=created_at,
                            updated_at=updated_at
            )
            db.session.add(new_rating)
            db.session.commit()
            return new_rating.to_dict()
        if form.errors:
            return form.errors

    ratings = Rating.query.all()
    normalized_ratings = {rating.id: rating.to_dict() for rating in ratings}
    return normalized_ratings
