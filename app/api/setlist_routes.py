from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Setlist, SetlistItem, db
from datetime import datetime

setlist_routes = Blueprint('setlist', __name__)


@setlist_routes.route('', methods=["GET", "POST"])
def setlists():
    setlists = Setlist.query.order_by(Setlist.created_at).all()
    setlist_items = SetlistItem.query.all()
    if request.method == "POST":
        if not current_user.id:
            return {"error" : "Sign in to create a Setlist"}
        data = request.get_json()
        newSetlist = {
            "name" : data["name"],
            "author_id" : data["author_id"],
            "description" : data["description"],
            "public" : data["public"],
            "created_at" : data["created_at"],
            "updated_at" : data["updated_at"]
        }
        db.session.add(newSetlist)
        db.session.commit()
        return newSetlist.to_dict()

    normalized_setlists = {setlist.id : setlist.to_dict() for setlist in setlists}
    normalized_setlist_items = {item.id : item.to_dict() for item in setlist_items}

    return {
        "Setlists" :normalized_setlists,
        "Setlist_itmes" :normalized_setlist_items
    }
