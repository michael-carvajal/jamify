from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Songsheet

songsheet_routes = Blueprint('songsheets', __name__)


@songsheet_routes.route('/', methods = ["GET", "POST"])
def songsheets():
    songsheets = Songsheet.query.all()
    return {"songsheets" : [songsheet.to_dict() for songsheet in songsheets]}
