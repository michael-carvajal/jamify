from .db import db, environment, SCHEMA, add_prefix_for_prod



class SetlistItem(db.Model):
    __tablename__ = 'setlist_items'

    id = db.Column(db.Integer, primary_key=True)
    songsheet_id = db.Column(db.Integer, db.ForeignKey('songsheets.id'), nullable=False)
    setlist_id = db.Column(db.Integer, db.ForeignKey('setlists.id'), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    songsheet = db.relationship("Songsheet")
    setlist = db.relationship("Setlist")

    def to_dict(self):
        return {
            'id': self.id,
            'songsheet_id': self.songsheet_id,
            'setlist_id': self.setlist_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
