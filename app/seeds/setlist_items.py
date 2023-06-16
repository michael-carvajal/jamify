from app.models import db, SetlistItem, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime



def seed_setlist_items():
    setlist_items = [
    SetlistItem(songsheet_id=1, setlist_id=1, created_at=datetime.now()),
    SetlistItem(songsheet_id=2, setlist_id=2, created_at=datetime.now()),
    SetlistItem(songsheet_id=3, setlist_id=3, created_at=datetime.now()),
    SetlistItem(songsheet_id=4, setlist_id=4, created_at=datetime.now()),
    SetlistItem(songsheet_id=5, setlist_id=5, created_at=datetime.now()),
    SetlistItem(songsheet_id=6, setlist_id=1, created_at=datetime.now()),
    SetlistItem(songsheet_id=1, setlist_id=2, created_at=datetime.now()),
    SetlistItem(songsheet_id=2, setlist_id=3, created_at=datetime.now()),
    SetlistItem(songsheet_id=3, setlist_id=4, created_at=datetime.now()),
    SetlistItem(songsheet_id=4, setlist_id=5, created_at=datetime.now()),
    SetlistItem(songsheet_id=5, setlist_id=1, created_at=datetime.now()),
    SetlistItem(songsheet_id=6, setlist_id=2, created_at=datetime.now()),
    SetlistItem(songsheet_id=1, setlist_id=3, created_at=datetime.now()),
    SetlistItem(songsheet_id=2, setlist_id=4, created_at=datetime.now()),
    SetlistItem(songsheet_id=3, setlist_id=5, created_at=datetime.now())
]
    db.session.add_all(setlist_items)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_setlist_items():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.setlist_items RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM setlist_items"))

    db.session.commit()
