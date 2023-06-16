from app.models import db, Genre, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime



def seed_genres():
    genres = [
        Genre(name="Rock", created_at=datetime.now()),
        Genre(name="Pop", created_at=datetime.now()),
        Genre(name="Hip Hop", created_at=datetime.now()),
        Genre(name="Country", created_at=datetime.now()),
        Genre(name="Jazz", created_at=datetime.now()),
        Genre(name="Electronic", created_at=datetime.now()),
        Genre(name="R&B", created_at=datetime.now()),
        Genre(name="Reggae", created_at=datetime.now()),
        Genre(name="Classical", created_at=datetime.now()),
        Genre(name="Folk", created_at=datetime.now())
    ]

    db.session.add_all(genres)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_genres():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.genres RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM genres"))

    db.session.commit()
