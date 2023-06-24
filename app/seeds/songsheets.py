from app.models import db, Songsheet, environment, SCHEMA, Artist
from sqlalchemy.sql import text
from datetime import datetime
from .lyrics import lucy_lyrics,  eleanor_lyrics, lyrics_boyfriend, lyrics_sorry, lyrics_dancing, super_trouper_lyrics
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import chromedriver_binary


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
        genre_id=1,
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
        genre_id=1,
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
        genre_id=2,
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
        genre_id=2,
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
        genre_id=2,
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
        genre_id=2,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )

    db.session.add(lucy)
    db.session.add(eleanor)
    db.session.add(boyfriend)
    db.session.add(sorry)
    db.session.add(trouper)
    db.session.add(dancing)
    urls = [
        'https://tabs.ultimate-guitar.com/tab/acdc/back-in-black-chords-18953',
        'https://tabs.ultimate-guitar.com/tab/nirvana/smells-like-teen-spirit-chords-807883',
        'https://tabs.ultimate-guitar.com/tab/eagles/hotel-california-chords-46190',
        'https://tabs.ultimate-guitar.com/tab/coldplay/yellow-chords-114080',
        "https://tabs.ultimate-guitar.com/tab/the-animals/house-of-the-rising-sun-chords-18688",
        "https://tabs.ultimate-guitar.com/tab/pink-floyd/wish-you-were-here-chords-44555",
        "https://tabs.ultimate-guitar.com/tab/grover-washington-jr-/just-the-two-of-us-chords-663141",
        "https://tabs.ultimate-guitar.com/tab/john-lennon/imagine-chords-9306",
        "https://tabs.ultimate-guitar.com/tab/david-bowie/space-oddity-chords-105869",
        "https://tabs.ultimate-guitar.com/tab/pixies/where-is-my-mind-chords-89446",
        "https://tabs.ultimate-guitar.com/tab/elton-john/your-song-chords-29113",
        "https://tabs.ultimate-guitar.com/tab/radiohead/no-surprises-chords-183884",
        "https://tabs.ultimate-guitar.com/tab/amy-winehouse/back-to-black-chords-467281",
        "https://tabs.ultimate-guitar.com/tab/backstreet-boys/i-want-it-that-way-chords-827123",
        "https://tabs.ultimate-guitar.com/tab/fleetwood-mac/dreams-chords-43918",
        "https://tabs.ultimate-guitar.com/tab/louis-armstrong/what-a-wonderful-world-chords-955258",
        "https://tabs.ultimate-guitar.com/tab/a-ha/take-on-me-chords-390284",
        "https://tabs.ultimate-guitar.com/tab/bee-gees/how-deep-is-your-love-chords-1191900",
        "https://tabs.ultimate-guitar.com/tab/the-white-stripes/seven-nation-army-tabs-50735",
        "https://tabs.ultimate-guitar.com/tab/lynyrd-skynyrd/sweet-home-alabama-chords-849467",
        "https://tabs.ultimate-guitar.com/tab/arctic-monkeys/do-i-wanna-know-chords-1418189",
        "https://tabs.ultimate-guitar.com/tab/bob-dylan/blowin-in-the-wind-chords-14835"
    ]
    print(1)
    chrome_options = Options()
    print(2)
    chrome_options.add_argument("--headless")
    print(3)
    chrome_options.add_argument("--no-sandbox")
    print(4)
    chrome_options.add_argument("--disable-dev-shm-usage")
    print(5)
    chrome_options.add_argument("--disable-gpu")  # Add this line for WSL

    chrome_options.binary_location = '/opt/render/project/.render/chrome/chromedriver'  # Update with the correct Chrome binary location in WSL
    driver = webdriver.Chrome(options=chrome_options)
    print(6)

    for url in urls:

        driver.get(url)

        html_source_code = driver.execute_script("return document.body.innerHTML;")
        # print(html_source_code)
        soup = BeautifulSoup(html_source_code, 'html.parser')
        links = soup.findAll("pre", class_="tK8GG Ty_RP")
        artists = soup.findAll("a", class_="aPPf7 fcGj5")
        titles = soup.findAll("h1", class_="dUjZr")
        keys= soup.findAll("td", class_="IcoWj")

        # print()
        # print("artists ================---------0----------------------->",artists)

        chordsString = ""
        artist = artists[0].text
        title = titles[0].text
        key = keys[2].text

        for item in links:
            chordsString += f'\n{item.text}'
        print(chordsString)
        print(artist)
        print(title)
        print(key)

        newArtist = Artist(
            name=artist,
            created_at=datetime.now(),
            updated_at=datetime.now()

        )
        db.session.add(newArtist)
        db.session.commit()
        newSongsheet = Songsheet(
            title=title,
            body= chordsString,
            artist_id=newArtist.to_dict()["id"],
            author_id=2,
            song_name=title,
            key=key,
            version=1,
            genre_id=2,
            created_at=datetime.now(),
            updated_at=datetime.now()
        )
        db.session.add(newSongsheet)

    driver.quit()


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
