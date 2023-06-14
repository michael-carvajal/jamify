from app.models import db, Album, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


def seed_albums():
    sgt_peppers = Album( artist_id=1,  name="Sgt. Pepper's Lonely Hearts Club Band", year_released=1967,created_at=datetime.now(), updated_at=datetime.now()  )
    revolver = Album( artist_id=1,  name="Revolver", year_released=1966, created_at=datetime.now(), updated_at=datetime.now()  )
    abbey_road = Album( artist_id=1,  name="Abbey Road", year_released=1969, created_at=datetime.now(), updated_at=datetime.now()  )

    db.session.add(sgt_peppers)
    db.session.add(revolver)
    db.session.add(abbey_road)

    my_world = Album(artist_id=2, name="My World 2.0", year_released=2010, created_at=datetime.now(), updated_at=datetime.now())
    believe = Album(artist_id=2, name="Believe", year_released=2012, created_at=datetime.now(), updated_at=datetime.now())
    purpose = Album(artist_id=2, name="Purpose", year_released=2015, created_at=datetime.now(), updated_at=datetime.now())

    db.session.add(my_world)
    db.session.add(believe)
    db.session.add(purpose)

    arrival = Album(artist_id=3, name="Arrival", year_released=1976, created_at=datetime.now(), updated_at=datetime.now())
    gold = Album(artist_id=3, name="ABBA Gold: Greatest Hits", year_released=1992, created_at=datetime.now(), updated_at=datetime.now())
    super_trouper = Album(artist_id=3, name="Super Trouper", year_released=1980, created_at=datetime.now(), updated_at=datetime.now())

    db.session.add(arrival)
    db.session.add(gold)
    db.session.add(super_trouper)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_albums():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.albums RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM albums"))

    db.session.commit()
