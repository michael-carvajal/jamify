from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import chromedriver_binary
urls = [
    'https://tabs.ultimate-guitar.com/tab/acdc/back-in-black-chords-18953',
    'https://tabs.ultimate-guitar.com/tab/the-beatles/hey-jude-chords-17275',
    'https://tabs.ultimate-guitar.com/tab/nirvana/smells-like-teen-spirit-chords-807883',
    'https://tabs.ultimate-guitar.com/tab/eagles/hotel-california-chords-46190',
    'https://tabs.ultimate-guitar.com/tab/coldplay/yellow-chords-114080',
    "https://tabs.ultimate-guitar.com/tab/the-animals/house-of-the-rising-sun-chords-18688",
    "https://tabs.ultimate-guitar.com/tab/pink-floyd/wish-you-were-here-chords-44555",
    "https://tabs.ultimate-guitar.com/tab/the-beatles/yesterday-chords-17450",
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

# chrome_options.binary_location = '/usr/bin/google-chrome'  # Update with the correct Chrome binary location in WSL
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
    print("keys ================---------0----------------------->",keys[2].text)

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


driver.quit()
