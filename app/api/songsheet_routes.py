from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Songsheet, db, Album, Artist, Genre
from datetime import datetime

songsheet_routes = Blueprint('songsheets', __name__)


@songsheet_routes.route('', methods = ["GET", "POST"])
def songsheets():
    if request.method == "POST":
        user_id = current_user.id
        # print(request.get_json())
        data = request.get_json()
        new_songsheet = Songsheet(
            title=data['title'],
            body= data['body'],
            artist_id=data['artist_id'],
            author_id=user_id,
            album_id=data['album_id'],
            genre_id=data['genre_id'],
            song_name=data['song_name'],
            key=data['key'],
            version=data['version'],
            created_at=datetime.now(),
            updated_at=datetime.now()
        )
        db.session.add(new_songsheet)
        db.session.commit()
        return new_songsheet.to_dict()

    songsheets = Songsheet.query.order_by(Songsheet.title).all()
    artists = Artist.query.order_by(Artist.name).all()
    albums = Album.query.order_by(Album.year_released).all()
    genres = Genre.query.order_by(Genre.name).all()

    normalized_songsheets = {songsheet.id: songsheet.to_dict() for songsheet in songsheets}
    normalized_artists = {artist.id: artist.to_dict() for artist in artists}

    normalized_albums = {album.id: album.to_dict() for album in albums}
    normalized_genres = {genre.id : genre.to_dict() for genre in genres}


    return {
        "Songsheets":normalized_songsheets,
        "Artists": normalized_artists,
        "Albums": normalized_albums,
        "Genres" : normalized_genres
        }

@songsheet_routes.route('/artists', methods = ["GET", "POST"])
@login_required
def artists():
    if request.method == "POST":
        data = request.get_json()
        new_artist = Artist(name=data['name'],
                            created_at=datetime.now(),
                            updated_at=datetime.now())
        db.session.add(new_artist)
        db.session.commit()
        return new_artist.to_dict()

@songsheet_routes.route('/albums', methods = ["GET", "POST"])
@login_required
def albums():
    if request.method == "POST":
        data = request.get_json()
        new_album = Album(name=data['name'],
                            artist_id=data['artist_id'],
                            year_released=data['year_released'],
                            created_at=datetime.now(),
                            updated_at=datetime.now())
        db.session.add(new_album)
        db.session.commit()
        return new_album.to_dict()
    
@songsheet_routes.route('/genres', methods = ["GET", "POST"])
@login_required
def genres():
    if request.method == "POST":
        data = request.get_json()
        new_genre = Genre(name=data['name'],
                            created_at=datetime.now())
        db.session.add(new_genre)
        db.session.commit()
        return new_genre.to_dict()


@songsheet_routes.route('/<int:id>', methods = ["GET", "PUT", "DELETE"])
def single_songsheet(id):
    songsheet = Songsheet.query.get(id)
    songsheet_json = songsheet.to_dict()
    user_id = current_user.id

    # print('thisssss is sss songsheeet objetxct ========================>', songsheet_json)

    if request.method == "DELETE":
        if user_id != songsheet_json['author_id']:
            return {"error" : "Unathorized/Forbidden"}

        db.session.delete(songsheet)
        db.session.commit()
        return {"deleted" : songsheet.to_dict()}

    if request.method == "PUT":
        if user_id != songsheet_json['author_id']:
            return {"error" : "Unathorized/Forbidden"}
        data = request.get_json()

        songsheet.title = data['title']
        songsheet.body = data['body']
        songsheet.artist_id = data['artist_id']
        songsheet.album_id = data['album_id']
        songsheet.song_name = data['song_name']
        songsheet.key = data['key']
        songsheet.version = data['version']
        songsheet.updated_at = datetime.now()

        db.session.commit()
        return {"updated" : songsheet.to_dict()}


    return songsheet.to_dict()
