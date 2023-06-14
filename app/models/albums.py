from .db import db, environment, SCHEMA, add_prefix_for_prod


class Album(db.Model):
    __tablename__ = 'albums'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    artist_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('artists.id')), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    year_released = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    artist = db.relationship("Artist", back_populates="albums")
    songsheets = db.relationship("Songsheet", back_populates="album", cascade="all, delete-orphan")




    def to_dict(self):
        return {
            'id': self.id,
            'artist_id': self.artist_id,
            'year_released': self.year_released,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
