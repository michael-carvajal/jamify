from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Songsheet, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}



@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user and tables associated with by id and returns that user in a dictionary
    """

    user = User.query.get(id)
    songsheets = db.session.query(Songsheet).filter(Songsheet.author_id == user.id)
    normalized_songsheets = {songsheet.id: songsheet.to_dict() for songsheet in songsheets}

    return {
        "user": user.to_dict(),
        "songsheets": normalized_songsheets
    }
