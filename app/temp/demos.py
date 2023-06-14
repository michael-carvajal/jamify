from .db import db, environment, SCHEMA, add_prefix_for_prod



class Demo(db.Model):
    __tablename__ = 'demos'

    id = db.Column(db.Integer, primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    audio_file = db.Column(db.String(255), nullable=False)
    public = db.Column(db.Boolean, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    author = db.relationship("User")
    user_likes = db.relationship("UserLike", backref="demo", cascade="all, delete-orphan")

    def to_dict(self):
        return {
            'id': self.id,
            'author_id': self.author_id,
            'audio_file': self.audio_file,
            'public': self.public,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
