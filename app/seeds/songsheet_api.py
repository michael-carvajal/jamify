from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
import chromedriver_binary
from datetime import datetime

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
# Create the Python file
file_content = '''from app.models import db, Songsheet, environment, SCHEMA, Artist
from sqlalchemy.sql import text
from datetime import datetime

def seed_songsheets_selenium():
    # Adds a demo Songsheet, you can add other Songsheets here if you want\n'''

file_content += f'''
    songs_list = []

    '''

# Iterate over the URLs
for url in urls:
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--disable-gpu")
    chrome_options.binary_location = "/usr/bin/google-chrome-stable"
    driver = webdriver.Chrome(options=chrome_options)

    driver.get(url)
    html_source_code = driver.execute_script("return document.body.innerHTML;")
    soup = BeautifulSoup(html_source_code, 'html.parser')
    links = soup.findAll("pre", class_="tK8GG Ty_RP")
    artists = soup.findAll("a", class_="aPPf7 fcGj5")
    titles = soup.findAll("h1", class_="dUjZr")
    keys = soup.findAll("td", class_="IcoWj")

    chordsString = ""
    artist = artists[0].text
    title = titles[0].text.split()
    title = (" ").join(title[0:-1])
    key = keys[2].text
    for item in links:
        chordsString += f'\\n{item.text}'

    # Append instance creation to the file content
    file_content += f'''
    newArtist = Artist(
        name="{artist}",
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(newArtist)
    db.session.commit()
    '''
    file_content += f'''
    {title.lower().replace(' ', '_')} = Songsheet(
        title="{title}",
        body="""{chordsString}""",
        artist_id=newArtist.id,
        author_id=1,
        song_name="{title}",
        key="{key}",
        version=1,
        genre_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    songs_list.append({title.lower().replace(' ', '_')})
    '''
    print('song sheet complete')
    driver.quit()

# Append the closing statements to the file content
file_content += '''

    db.session.add_all(songs_list)
    db.session.commit()


def undo_songsheets_selenium():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.songsheets RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM songsheets"))

    db.session.commit()
'''

# Write the content to the Python file
with open("songsheets_seeds.py", "w") as file:
    file.write(file_content)
