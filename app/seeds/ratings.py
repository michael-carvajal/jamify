from app.models import db, Rating, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime



def seed_ratings():
    ratings = [
        Rating(author_id=1,songsheet_id=7,rating=4.5,comment="Awesome work dude! I really love this song", created_at=datetime.now(), updated_at=datetime.now()),
        Rating(author_id=1, songsheet_id=5, rating=4.2, comment="Great chord progression!", created_at=datetime.now(), updated_at=datetime.now()),
        Rating(author_id=3, songsheet_id=12, rating=4.8, comment="Beautiful interpretation!", created_at=datetime.now(), updated_at=datetime.now()),
        Rating(author_id=4, songsheet_id=7, rating=3.7, comment="Could use some improvement.", created_at=datetime.now(), updated_at=datetime.now()),
        Rating(author_id=2, songsheet_id=15, rating=4.5, comment="Love the unique twist!", created_at=datetime.now(), updated_at=datetime.now()),
        Rating(author_id=1, songsheet_id=18, rating=4.1, comment="Impressive skills!", created_at=datetime.now(), updated_at=datetime.now()),
        Rating(author_id=3, songsheet_id=26, rating=4.9, comment="Masterful execution!", created_at=datetime.now(), updated_at=datetime.now()),
        Rating(author_id=4, songsheet_id=20, rating=3.6, comment="Not my cup of tea.", created_at=datetime.now(), updated_at=datetime.now()),
        Rating(author_id=2, songsheet_id=8, rating=4.7, comment="Captivating rendition!", created_at=datetime.now(), updated_at=datetime.now()),
        Rating(author_id=1, songsheet_id=16, rating=4.4, comment="Can't stop listening!", created_at=datetime.now(), updated_at=datetime.now()),
        Rating(author_id=3, songsheet_id=25, rating=4.9, comment="Absolutely brilliant!", created_at=datetime.now(), updated_at=datetime.now()),
        Rating(author_id=4, songsheet_id=6, rating=3.9, comment="Needs more energy.", created_at=datetime.now(), updated_at=datetime.now()),
        Rating(author_id=2, songsheet_id=11, rating=4.6, comment="Perfectly executed!", created_at=datetime.now(), updated_at=datetime.now()),
        Rating(author_id=1, songsheet_id=19, rating=4.3, comment="Great choice of chords!", created_at=datetime.now(), updated_at=datetime.now()),
        Rating(author_id=3, songsheet_id=24, rating=4.7, comment="Touches the soul!", created_at=datetime.now(), updated_at=datetime.now()),
        Rating(author_id=4, songsheet_id=14, rating=3.8, comment="Decent effort.", created_at=datetime.now(), updated_at=datetime.now()),

    ]

    db.session.add_all(ratings)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_ratings():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.ratings RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM ratings"))

    db.session.commit()
