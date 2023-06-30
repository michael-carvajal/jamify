from .db import db, environment, SCHEMA, add_prefix_for_prod



class Demo(db.Model):
    __tablename__ = 'demos'

    id = db.Column(db.Integer, primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    file_link = db.Column(db.String(1000), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    public = db.Column(db.Boolean, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)

    author = db.relationship("User")
    # user_likes = db.relationship("UserLike", back_populates="demo", cascade="all, delete-orphan")

    def to_dict(self):
        return {
            'id': self.id,
            'author_id': self.author_id,
            'file_link': self.file_link,
            'public': self.public,
            'name': self.name,
            'created_at': self.created_at,
        }
