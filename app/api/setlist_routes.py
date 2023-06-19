from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Setlist, SetlistItem, db
from datetime import datetime

setlist_routes = Blueprint('setlist', __name__)


@setlist_routes.route('/items/<int:id>', methods=["DELETE"])
def setlist_item(id):
    print(11111111111111)
    if not current_user.id:
            return {"error" : "Sign in to add to a Setlist"}
    print(222222222222222)
    item = SetlistItem.query.get(id)
    print(3333333333333)
    db.session.delete(item)
    print(444444444444444)
    db.session.commit()
    return item.to_dict()

@setlist_routes.route('', methods=["GET", "POST"])
def setlists():
    setlists = Setlist.query.order_by(Setlist.created_at).all()
    setlist_items = SetlistItem.query.all()
    if request.method == "POST":
        if not current_user.id:
            return {"error" : "Sign in to create a Setlist"}
        data = request.get_json()
        newSetlist = Setlist(
            name=data["name"],
            author_id=data["author_id"],
            description=data["description"],
            public=data["public"],
            created_at=datetime.now(),
            updated_at=datetime.now()
        )
        db.session.add(newSetlist)
        db.session.commit()
        return newSetlist.to_dict()

    normalized_setlists = {setlist.id : setlist.to_dict() for setlist in setlists}
    normalized_setlist_items = {item.id : item.to_dict() for item in setlist_items}

    return {
        "Setlists" :normalized_setlists,
        "Setlist_items" :normalized_setlist_items
    }


@setlist_routes.route('/<int:id>', methods=["DELETE", "PUT"])
def single_setlist(id):
    setlist = Setlist.query.get(id)
    print("inside the single set list route=============================")
    if request.method == "PUT":
        print("inside the singl edittitititit route=============================")
        data = request.get_json()
        setlist.name=data["name"]
        setlist.author_id=data["author_id"]
        setlist.description=data["description"]
        setlist.public=data["public"]
        setlist.created_at=datetime.now()
        setlist.updated_at=datetime.now()
        db.session.commit()
        return setlist.to_dict()

    if setlist:
            db.session.delete(setlist)
            db.session.commit()
            return setlist.to_dict()
    else:
        return {"error": "Setlist not found"}


@setlist_routes.route('/items', methods=["POST"])
def setlist_item_post():
    if request.method == "POST":
        if not current_user.id:
            return {"error" : "Sign in to add to a Setlist"}
        data = request.get_json()
        newSetlist_item = SetlistItem(
            setlist_id=data["setlist_id"],
            songsheet_id=data["songsheet_id"],
            created_at=datetime.now()
        )
        db.session.add(newSetlist_item)
        db.session.commit()
        return newSetlist_item.to_dict()
