from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Demo
from datetime import datetime

demos_routes = Blueprint('demos', __name__)

@demos_routes.route('')
def getDemos():
    demos = Demo.query.all()
    normalized_demos = {demo.id: demo.to_dict() for demo in demos}
    return normalized_demos
