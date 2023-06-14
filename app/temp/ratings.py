from .db import db, environment, SCHEMA, add_prefix_for_prod



class Rating(db.Model):
    __tablename__ = 'ratings'

    id = db.Column(db.Integer, primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    songsheet_id = db.Column(db.Integer, db.ForeignKey('songsheets.id'), nullable=False)
    rating = db.Column(db.Float, nullable=False)
    comment = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    rating_user = db.relationship("User", backref="ratings_given")

    songsheet = db.relationship("Songsheet")

    def to_dict(self):
        return {
            'id': self.id,
            'author_id': self.author_id,
            'songsheet_id': self.songsheet_id,
            'rating': self.rating,
            'comment': self.comment,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
