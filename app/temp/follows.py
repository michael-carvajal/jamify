from .db import db, environment, SCHEMA, add_prefix_for_prod



class Follow(db.Model):
    __tablename__ = 'follows'

    id = db.Column(db.Integer, primary_key=True)
    following_user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    followed_user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    following_user = db.relationship("User", foreign_keys=[following_user_id])
    followed_user = db.relationship("User", foreign_keys=[followed_user_id])

    def to_dict(self):
        return {
            'id': self.id,
            'following_user_id': self.following_user_id,
            'followed_user_id': self.followed_user_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
