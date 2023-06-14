from .db import db, environment, SCHEMA, add_prefix_for_prod
from flask_login import UserMixin, login_required


class Songsheet(db.Model):
    __tablename__ = 'songsheets'


    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    body = db.Column(db.String(10000), nullable=False)
    artist_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('artists.id')), nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    album_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('albums.id')), nullable=False)
    song_name = db.Column(db.String(50), nullable=False)
    key = db.Column(db.String(20), nullable=False)
    version = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    album = db.relationship("Album", back_populates="songsheets")
    artist = db.relationship("Artist")
    album = db.relationship("Album")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'body': self.body,
            'artist_id': self.artist_id,
            'author_id': self.author_id,
            'album_id': self.album_id,
            'song_name': self.song_name,
            'key': self.key,
            'version': self.version,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
