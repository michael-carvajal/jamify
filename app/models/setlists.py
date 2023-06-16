from .db import db, environment, SCHEMA, add_prefix_for_prod



class Setlist(db.Model):
    __tablename__ = 'setlists'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}



    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    description = db.Column(db.String(100))
    public = db.Column(db.Boolean, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    author = db.relationship("User")
    setlist_items = db.relationship("SetlistItem", back_populates="setlist", cascade="all, delete-orphan")
    # user_likes = db.relationship("UserLike", back_populates="setlist", cascade="all, delete-orphan")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'author_id': self.author_id,
            'description': self.description,
            'public': self.public,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
