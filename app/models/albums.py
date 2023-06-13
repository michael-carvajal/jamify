from .db import db, environment, SCHEMA, add_prefix_for_prod



class Album(db.Model):
    __tablename__ = 'albums'

    id = db.Column(db.Integer, primary_key=True)
    artist_id = db.Column(db.Integer, db.ForeignKey('artists.id'), nullable=False)
    year_released = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    artist = db.relationship("Artist")
    songsheets = db.relationship("Songsheet", backref="album", cascade="all, delete-orphan")

    def to_dict(self):
        return {
            'id': self.id,
            'artist_id': self.artist_id,
            'year_released': self.year_released,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
