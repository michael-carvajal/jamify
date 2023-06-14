from .db import db, environment, SCHEMA, add_prefix_for_prod



class UserLike(db.Model):
    __tablename__ = 'user_likes'

    id = db.Column(db.Integer, primary_key=True)
    setlist_id = db.Column(db.Integer, db.ForeignKey('setlists.id'))
    demo_id = db.Column(db.Integer, db.ForeignKey('demos.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    setlist = db.relationship("Setlist")
    demo = db.relationship("Demo")
    user = db.relationship("User")

    def to_dict(self):
        return {
            'id': self.id,
            'setlist_id': self.setlist_id,
            'demo_id': self.demo_id,
            'user_id': self.user_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
