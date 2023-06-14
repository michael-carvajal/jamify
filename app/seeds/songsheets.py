from app.models import db, Songsheet, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime
from .lyrics import lucy_lyrics,  eleanor_lyrics, lyrics_boyfriend, lyrics_sorry, lyrics_dancing, super_trouper_lyrics


# Adds a demo Songsheet, you can add other Songsheets here if you want
def seed_songsheets():
    lucy = Songsheet(
        title="Lucy in the Sky with Diamonds",
        body=lucy_lyrics,
        artist_id=1,
        author_id=1,
        album_id=1,
        song_name="Lucy in the Sky with Diamonds",
        key="G Major",
        version=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    eleanor = Songsheet(
        title="Eleanor Rigby",
        body=eleanor_lyrics,
        artist_id=1,
        author_id=1,
        album_id=2,
        song_name="Eleanor Rigby",
        key="E Minor",
        version=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    boyfriend = Songsheet(
        title="Boyfriend",
        body=lyrics_boyfriend,
        artist_id=2,
        author_id=1,
        album_id=5,
        song_name="Boyfriend",
        key="C# Minor",
        version=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )

    sorry = Songsheet(
        title="Sorry",
        body=lyrics_sorry,
        artist_id=2,
        author_id=1,
        album_id=6,
        song_name="Sorry",
        key="Bb Major",
        version=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )

    trouper = Songsheet(
        title="Super Trouper",
        body=super_trouper_lyrics,
        artist_id=3,
        author_id=1,
        album_id=9,
        song_name="Super Trouper",
        key="Bb Major",
        version=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )

    dancing = Songsheet(
        title="Dancing Queen",
        body= lyrics_dancing,
        artist_id=3,
        author_id=2,
        album_id=7,
        song_name="Dancing Queen",
        key="A Major",
        version=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )

    db.session.add(lucy)
    db.session.add(eleanor)
    db.session.add(boyfriend)
    db.session.add(sorry)
    db.session.add(trouper)
    db.session.add(dancing)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the Songsheets table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_songsheets():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.songsheets RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM songsheets"))

    db.session.commit()
