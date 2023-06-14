from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Songsheet, db
from datetime import datetime

songsheet_routes = Blueprint('songsheets', __name__)


@songsheet_routes.route('', methods = ["GET", "POST"])
def songsheets():
    print("Helllloeooeoee 111111111111111111111111111")
    if request.method == "POST":
        print("Helllloeooeoee ====================================================")
        # print(request.get_json())
        data = request.get_json()
        new_songsheet = Songsheet(
            title=data['title'],
            body= data['body'],
            artist_id=data['artist_id'],
            author_id=data['author_id'],
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

    print("Helllloeooeoee 222222222222222222222222222222")
    songsheets = Songsheet.query.all()
    return {"songsheets" : [songsheet.to_dict() for songsheet in songsheets]}


@songsheet_routes.route('/<int:id>')
def single_songsheet(id):



    songsheet = Songsheet.query.get(id)
    return songsheet.to_dict()
