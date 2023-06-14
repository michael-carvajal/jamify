from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Songsheet, db
from datetime import datetime

songsheet_routes = Blueprint('songsheets', __name__)


@songsheet_routes.route('', methods = ["GET", "POST"])
def songsheets():
    user_id = current_user.id
    if request.method == "POST":
        # print(request.get_json())
        data = request.get_json()
        new_songsheet = Songsheet(
            title=data['title'],
            body= data['body'],
            artist_id=data['artist_id'],
            author_id=user_id,
            album_id=data['album_id'],
            song_name=data['song_name'],
            key=data['key'],
            version=data['version'],
            created_at=datetime.now(),
            updated_at=datetime.now()
        )
        db.session.add(new_songsheet)
        db.session.commit()
        return new_songsheet.to_dict()

    songsheets = Songsheet.query.all()
    return {"songsheets" : [songsheet.to_dict() for songsheet in songsheets]}


@songsheet_routes.route('/<int:id>', methods = ["GET", "PUT", "DELETE"])
def single_songsheet(id):
    songsheet = Songsheet.query.get(id)
    songsheet_json = songsheet.to_dict()
    user_id = current_user.id
    print('thisssss is sss songsheeet objetxct ========================>', songsheet_json)

    if request.method == "DELETE":
        if user_id != songsheet_json['author_id']:
            return {"error" : "Unathorized/Forbidden"}

        db.session.delete(songsheet)
        db.session.commit()
        return {"deleted" : songsheet.to_dict()}


    return songsheet.to_dict()
