from app.models import db, Artist, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


def seed_artists():
    the_beatles = Artist( name="The Beatles",  created_at=datetime.now(), updated_at=datetime.now()  )
    justin_bieber = Artist( name="Justin Bieber",  created_at=datetime.now(), updated_at=datetime.now()  )
    abba = Artist( name="ABBA",  created_at=datetime.now(), updated_at=datetime.now()  )

    db.session.add(the_beatles)
    db.session.add(justin_bieber)
    db.session.add(abba)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_artists():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.artists RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM artists"))

    db.session.commit()
