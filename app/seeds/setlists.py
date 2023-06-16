from app.models import db, Setlist, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime



def seed_setlists():
    setlists = [
    Setlist(name="Open Mic", author_id=1, description="Should be a crowd pleaser", public=True, created_at=datetime.now(), updated_at=datetime.now()),
    Setlist(name="Rock Classics", author_id=2, description="A collection of timeless rock songs", public=True, created_at=datetime.now(), updated_at=datetime.now()),
    Setlist(name="Hip Hop Hits", author_id=3, description="The best hip hop tracks of all time", public=True, created_at=datetime.now(), updated_at=datetime.now()),
    Setlist(name="Country Jams", author_id=1, description="Toe-tapping country music for every occasion", public=True, created_at=datetime.now(), updated_at=datetime.now()),
    Setlist(name="Jazz Standards", author_id=2, description="Smooth jazz classics to set the mood", public=True, created_at=datetime.now(), updated_at=datetime.now())
]

    db.session.add_all(setlists)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_setlists():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.setlists RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM setlists"))

    db.session.commit()
