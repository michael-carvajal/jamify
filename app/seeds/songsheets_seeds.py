from app.models import db, Songsheet, environment, SCHEMA, Artist
from sqlalchemy.sql import text
from datetime import datetime

def seed_songsheets_selenium():
    # Adds a demo Songsheet, you can add other Songsheets here if you want

    songs_list = []

    
    newArtist = Artist(
        name="AC/DC",
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(newArtist)
    db.session.commit()
    
    back_in_black = Songsheet(
        title="Back In Black",
        body="""\n[Intro]
| E   D   | A/C#    | x4
 
[Verse]
E
Back in black
D
I hit the sack
A/C#
I've been too long I'm glad to be back
        E
Yes, I'm let loose
D
From the noose
A/C#
That's kept me hanging about
            E
I've been l-ooking at the sky
           D
'Cause it's gettin' me high
A/C#
Forget the hearse 'cause I never die
     E
I got nine lives
D
Cat's eyes
A/C#
Abusin' every one of them and running wild
 
[Chorus]
                A E  B  A  B
'Cause I'm back
              A E  B  A  B
Yes, I'm back
               G  D  A  G  A
Well, I'm back
              G  D  A  G  A
Yes, I'm back
          A  E  B  A  B   A  E  B  A  B
Well, I'm ba--a--a--a-ck, ba--a--a--a-ck
             G
(Well) I'm b-ack in black
             D
Yes, I'm  ba-ck in black
 
[Verse]
E
Back in the back
    D
Of a cadillac
       A/C#
Number one with a bullet, Im a power pack
        E
Yes, I'm in a bang
D
  With a gang
A/C#
Theyve got to catch me if they want me to hang
           E
Cause Im b-ack on the track
      D
And I-m beatin the flack
   A/C#
No-bodys gonna get me on another rap
     E
So l-ook at me now
       D
Im jus-t makin my play
     A/C#
Dont try to push your luck, just get out of my way
 
[Chorus]
                A E  B  A  B
'Cause I'm back
              A E  B  A  B
Yes, I'm back
               G  D  A  G  A
Well, I'm back
              G  D  A  G  A
Yes, I'm back
                     A E  B  A  B
Well, I'm back, back
                         A E  B  A  B
(Well) I'm back in black
G        D
Yes, I'm  back in black
 
[Lead]
E D A/C#
 
[Chorus]
A  E   B   A    B
'C-ause I'm bac-k
              A E  B  A  B
Yes, I'm back
              G  D  A  G  A
Well, I'm back
              G  D  A  G  A
Yes, I'm back
          A  E  B  A  B   A  E  B  A  B
Well, I'm ba--a--a--a-ck, ba--a--a--a-ck
             G
(Well) I'm b-ack in black
             D
Yes, I'm  ba-ck in black
 
[Riffs]
A E  B  A  B A
A E  B  A  B A
          A E  B  A  B A
hooo yeah
         A E  B  A  B
Ohh yeah
         G  D  A  G  A
Yes I am
         G  D  A  G  A
Oh yeah
A E  B  A  B A
A E  B  A  B A
 
[Outro]
          A  E  B  A  B   A  E  B  A  B
Well, I'm ba--a--a--a-ck, ba--a--a--a-ck
  G D A G  A    G D A G  A
B-a-a-a-ac-k, b-a-a-a-ac-k
        A  E  B  A  B   A  E  B  A  B
Yes I'm ba--a--a--a-ck, ba--a--a--a-ck
          G
Yes.  I'm back in black
             D
Yes, I'm  ba-ck in black
 
C  B
 
Outta the sack!
 
| E   D   | A/C#    |
(repeat to end)
X""",
        artist_id=newArtist.id,
        author_id=1,
        song_name="Back In Black",
        key="E",
        version=1,
        genre_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    songs_list.append(back_in_black)
    
    newArtist = Artist(
        name="Nirvana",
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(newArtist)
    db.session.commit()
    
    smells_like_teen_spirit = Songsheet(
        title="Smells Like Teen Spirit",
        body="""\n[Intro/Riff]
E   A   G   C   x4
 
[Interlude]
E   A   G   C   x2
 
 
[Verse 1]
E       A       G
  Load up on guns
 C          E
Bring your friends
      A      G
It's fun to lose
     C     E
And to pretend
       A      G
She's o-ver-bored
 C       E
Self-assured
   A      G      C     E
Oh no, I know a dirty word
 
 
[Pre-Chorus]
    A      G      C        E
Hello, hello, hello, how low
    A      G      C        E
Hello, hello, hello, how low
    A      G      C        E
Hello, hello, hello, how low
    A      G      C
Hello, hello, hello
 
 
[Chorus]
           E
With the lights out
A         G
It's less dangerous
C        E
Here we are now
A       G
Entertain us
C      E
I feel stupid
A       G
And contagious
C        E
Here we are now
A       G
Entertain us
C    E
A mulatto
A     G
An albino
C     E
A mosquito
A     G
My libido
C
  Yeah
 
 
[Post-Chorus]
              Hey!
e|-----------------------------------------|
B|-----------------------2-2-0-0-----------|
G|--1-1-1-2-2--2^--1-1-1-2-2-0-0-1---------|
D|--2-2-2-3-3------2-2-2-2-2-0-0-2---------| x2
A|--2-2-2-3-3------2-2-2---------2---------|
E|-----------------------------------------|
 
 
[Interlude]
E   A   G   C   x2
 
 
[Verse 2]
E      A        G  C     E
  I'm worse at what I do best
     A       G      C     E
And for this gift I feel blessed
     A      G       C       E
Our little group has always been
    A      G      C        E
And always will until the end
 
 
[Pre-Chorus]
    A      G      C        E
Hello, hello, hello, how low
    A      G      C        E
Hello, hello, hello, how low
    A      G      C        E
Hello, hello, hello, how low
    A      G      C
Hello, hello, hello
 
 
[Chorus]
           E
With the lights out
A         G
It's less dangerous
C        E
Here we are now
A       G
Entertain us
C      E
I feel stupid
A       G
And contagious
C        E
Here we are now
A       G
Entertain us
C    E
A mulatto
A     G
An albino
C     E
A mosquito
A     G
My libido
C
  Yeah
 
 
[Post-Chorus]
              Hey!
e|-----------------------------------------|
B|-----------------------2-2-0-0-----------|
G|--1-1-1-2-2--2^--1-1-1-2-2-0-0-1---------|
D|--2-2-2-3-3------2-2-2-2-2-0-0-2---------| x2
A|--2-2-2-3-3------2-2-2---------2---------|
E|-----------------------------------------|
 
 
[Solo]
 
e|-------------------------------------|
B|-------------------------------------|
G|---7-9---7-9-7-5-4-5-4---------------|
D|-9-----5---------------7-5-7-9-7-5-4-| x2
A|-------------------------------------|
E|-------------------------------------|
 
e|----------------------|
B|----------------------|
G|----------------------|
D|-5-4--5-4--5-4--5-4---| x4
A|--------------------7-|
E|----------------------|
 
 
[Interlude]
E   A   G   C   x2
 
 
[Verse 3]
E     A    G         C    E
  And I forget just why I taste
    A      G        C         E
Oh yeah, I guess it makes me smile
   A       G          C       E
I found it hard, it's hard to find
    A       G      C     E
Oh well, whatever, nevermind
 
 
[Pre-Chorus]
    A      G      C        E
Hello, hello, hello, how low
    A      G      C        E
Hello, hello, hello, how low
    A      G      C        E
Hello, hello, hello, how low
    A      G      C
Hello, hello, hello
 
 
[Chorus]
           E
With the lights out
A         G
It's less dangerous
C        E
Here we are now
A       G
Entertain us
C      E
I feel stupid
A       G
And contagious
C        E
Here we are now
A       G
Entertain us
C    E
A mulatto
A     G
An albino
C     E
A mosquito
A     G
My libido
 
 
[Outro]
C   E    A    G   C
A denial, a denial
    E    A    G   C
A denial, a denial
    E    A    G   C
A denial, a denial
    E    A    G   C
A denial, a denial
    E
A denial
 
 
************************************
 
| ^  Bend
 
************************************
X""",
        artist_id=newArtist.id,
        author_id=1,
        song_name="Smells Like Teen Spirit",
        key="E",
        version=1,
        genre_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    songs_list.append(smells_like_teen_spirit)
    
    newArtist = Artist(
        name="Eagles",
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(newArtist)
    db.session.commit()
    
    hotel_california = Songsheet(
        title="Hotel California",
        body="""\nTabbed by: Emrldeyzs
Capo 2
 
[Intro]
Am   E7   G   D   F   C   Dm   E7   x2
 
[Verse]
Am                         E7
  On a dark desert highway, cool wind in my hair
G                      D
  Warm smell of colitas rising up through the air
F                          C
  Up ahead in the distance, I saw a shimmering light
Dm
   My head grew heavy and my sight grew dim
E7
  I had to stop for the night
 
Am                               E7
  There she stood in the doorway; I heard the mission bell
G
  And I was thinking to myself
              D
This could be heaven or this could be hell
F                          C
  Then she lit up a candle, and she showed me the way
Dm
   There were voices down the corridor,
E7
  I thought I heard them say...
 
[Chorus]
F                          C
  Welcome to the Hotel California.
       E7                                          Am
Such a lovely place, (such a lovely place), such a lovely face
F                               C
Plenty of room at the Hotel California
    Dm                                       E7
Any time of year, (any time of year) You can find it here
 
[Verse]
Am                            E7
 Her mind is Tiffany-twisted, She got the Mercedes bends
G                                    D
 She got a lot of pretty pretty boys   she calls friends
F                                   C
  How they danced in the courtyard, sweet summer sweat
Dm                       E7
  Some dance to remember, some dance to forget
 
Am                           E7
  So I called up the captain; Please bring me my wine (he said)
G                                     D
 We haven't had that spirit here since 1969
F                                         C
  and still those voices are calling from far away
Dm
   Wake you up in the middle of the night
E7
  Just to hear them say...
 
[Chorus]
F                         C
 Welcome to the Hotel California.
       E7                                          Am
Such a lovely place, (such a lovely place), such a lovely face
        F                             C
They're livin' it up at the Hotel California
       Dm                                               E7
What a nice surprise, (what a nice surprise) Bring your alibis
 
[Verse]
Am                        E7
   Mirrors on the ceiling; the pink champagne on ice (and she said)
G                                D
  We are all just prisoners here, of our own device
F                              C
  and in the master's chambers, they gathered for the feast
Dm
 They stab it with their steely knives but they
E7
just can't kill the beast
 
Am                             E7
   Last thing I remember, I was running for the door
G                                       D
  I had to find the passage back to the place I was before
F                                   C
  "Relax" said the night man; we are programmed to receive
Dm
  You can check out any time you like
E7
 But you can never leave...
 
[Outro Solo]
Am   E7   G   D   F   C   Dm   E7   x3
 
[Harmonies]
Am   E7   G   D   F   C   Dm   E7   x2
(fade out)
X""",
        artist_id=newArtist.id,
        author_id=1,
        song_name="Hotel California",
        key="Bm",
        version=1,
        genre_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    songs_list.append(hotel_california)
    
    newArtist = Artist(
        name="Coldplay",
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(newArtist)
    db.session.commit()
    
    yellow = Songsheet(
        title="Yellow",
        body="""\n[Intro]
G D C G
 
[Verse 1]
G
Look at the stars
                       D
Look how they shine for you
                      Cmaj7
And everything you do
 
Yeah, they were all yellow
G
I came along
                  D
I wrote a song for you
                          Cmaj7
And all the things you do
 
And it was called "Yellow."
G                D
So then I took my turn
                            Cmaj7
Oh what a thing to have done
                       G Gsus4
And it was all yellow
 
[Chorus 1]
Cmaj7
Your skin
Em7      D
Oh yeah, your skin and bones
Cmaj7  Em7          D
Turn into something beautiful
Cmaj7     Em7        D          Cmaj7
You know, you know I love you so
 
You know I love you so
 
[Instrumental]
G   D   C   G Gsus4
 
[Verse 2]
G
I swam across
                   D
I jumped across for you
                      Cmaj7
Oh, what a thing to do
 
'Cause you were all yellow
G
I drew a line
                 D
I drew a line for you
                      Cmaj7
Oh, what a thing to do
                      G Gsus4
And it was all yellow
 
[Chorus 2]
C
Your skin
Em7           D
Oh yeah, your skin and bones
Cmaj7  Em7          D
Turn into something beautiful
Cmaj7
And you know
Em7       D            Cmaj7
For you I bleed myself dry
 
For you I bleed myself dry
 
[Instrumental]
G   D   C   G Gsus4
 
[Bridge]
 G                                  D
It's true, look how they shine for you 
                        Cmaj7
Look how they shine for you
                        G
Look how they shine for
                        D
Look how they shine for you
                        Cmaj7
Look how they shine for you
 
Look how they shine
 
[Outro]
G
Look at the stars
                       Dm7
Look how they shine for you
                          Cmaj7
And all the things that you do
X""",
        artist_id=newArtist.id,
        author_id=1,
        song_name="Yellow",
        key="G",
        version=1,
        genre_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    songs_list.append(yellow)
    
    newArtist = Artist(
        name="The Animals",
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(newArtist)
    db.session.commit()
    
    house_of_the_rising_sun = Songsheet(
        title="House Of The Rising Sun",
        body="""\nIn the Animals' recording the organ often plays 7th chords,
when the guitar does not.
 
 
[Intro]
| Am | C | D | F |
| Am | E | Am | E |
 
 
[Verse 1]
      Am   C        D           F
There is a house in New Orleans
     Am        C      E     E
They call the "Rising Sun"
         Am       C       D             F
And it's been the ruin of many a poor boy
    Am     E        | Am | C | D | F | Am | E | Am | E |
And God, I know, I'm one               (organ plays E7)
 
 
[Verse 2]
   Am     C     D        F
My mother was a tailor (organ: F7)
    Am       C        E     E
She sewed my new blue jeans (organ: E7)
   Am     C     D        F
My father was a gambling man
Am      E    | Am | C | D | F | Am | E | Am | E |
Down in New Orleans.            (organ plays E7)
 
 
[Verse 3]
        Am   C       D         F
Now the only thing a gambler needs (organ: F7)
     Am       C     E     E
Is a suitcase and a trunk (organ: E7)
        Am   C      D           F
And the only time, he's satisfied,
   Am        E    | Am | C | D | F | Am | E | Am | E |
Is when he's on a drunk              (organ plays E7)
 
 
[Organ Solo]
| Am | C | D | F |
| Am | C | E | % |
| Am | C | D | F |
| Am | E |
| Am | C/E | D | F |
| Am | E | Am | E |
 
 
[Verse 4]
    Am     C              D       F
Oh, mother, tell your children (organ: F7)
       Am      C      E     E
Not to do what I have done (organ: E7)
Am         C        D            F
Spend your lives in sin and misery
       Am       E     | Am | C | D | F | Am | E | Am | E |
In the House of Rising Sun              (organ plays E7)
 
 
[Verse 5]
            Am       C      D           F
Well, I got one foot on the platform (organ plays F7)
    Am         C        E     E
The other foot on the train (organ: E7)
    Am    C       D           F
I'm going back to New Orleans (organ: F7)
   Am        E       | Am | C | D | F | Am | E | Am | E |
To wear that ball and chain             (organ plays E7#9)
 
 
[Verse 6]
            Am   C        D           F
Well, there is a house in New Orleans (organ: F7)
     Am        C      E     E
They call the "Rising Sun" (organ: E7)
         Am       C       D           F
And it's been the ruin of many a poor boy
    Am     E7      | Am | C | D | F7 | Am | E7 |
And God, I know, I'm one
 
 
[Coda]
| Am | Dm | Am | Dm | Am | Dm |
(a tempo)
| Am | Dm | Am | Dm | Am
   (ritardando)     (organ plays Am9; guitar equivalent: x-0-5-5-5-7)
X""",
        artist_id=newArtist.id,
        author_id=1,
        song_name="House Of The Rising Sun",
        key="Am",
        version=1,
        genre_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    songs_list.append(house_of_the_rising_sun)
    
    newArtist = Artist(
        name="Pink Floyd",
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(newArtist)
    db.session.commit()
    
    wish_you_were_here = Songsheet(
        title="Wish You Were Here",
        body="""\n[Intro]
                     Em7                G
e|-------------------3-3----------------3-3---------|
B|-------------------3-3----------------3-3---------|
G|-------------------0-0------0---------0-0---------|
D|----------0--2-----2-2---2-----2--0---0-0---------| x2
A|-----0h2-----------2-2----------------2-2---------|
E|--3----------------0-0----------------3-3---------|
 
                     Em7               A7sus4
e|-------------------3-3----------------3-3---------|
B|-------------------3-3----------------3-3---------|
G|-------------------0-0----------------2-2---------|
D|----------0--2-----2-2--2--0----------2-2---------| x2
A|-----0h2-----------2-2--------2--0----0-0---------|
E|--3----------------0-0----------------------------|
 
               G
e|-------------3-3-------|
B|-------------3-3-------|
G|-------------0-0-------|
D|-------------0-0-------|
A|--0-2-0------2-2-------|
E|---------3---3-3-------|
 
 
[Verse 1]
C                         D/F#
So, so you think you can tell,
             Am/E                   G
Heaven from Hell, blue skies from pain.
                     D/F#                      C                    Am
Can you tell a green field from a cold steel rail, a smile from a veil,
                      G
Do you think you can tell?
 
[Verse 2]
                      C                   D/F#
Did they get you to trade your heroes for ghosts,
                Am/E                  G                             D/F#
Hot ashes for trees, hot air for a cool breeze, cold comfort for change,
                  C                        Am                         G
And did you exchange a walk on part in the war for a lead role in a cage?
 
[Instrumental]
Em7  G  Em7  G  Em7  A7sus4  Em7  A7sus4  G
 
[Verse 3]
C                               D/F#
How I wish, how I wish you were here.
           Am/E                                    G
We're just two lost souls swimming in a fish bowl, year after year,
D/F#                               C
 Running over the same old ground. What have we found?
             Am                         G
The same old fears. Wish you were here!
 
[Instrumental]
Em7  G  Em7  G  Em7  A7sus4  Em7  A7sus4  G  x2
X""",
        artist_id=newArtist.id,
        author_id=1,
        song_name="Wish You Were Here",
        key="Em",
        version=1,
        genre_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    songs_list.append(wish_you_were_here)
    
    newArtist = Artist(
        name="Grover Washington Jr.",
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(newArtist)
    db.session.commit()
    
    just_the_two_of_us = Songsheet(
        title="Just The Two Of Us",
        body="""\nARTIST: Grover Washington Jr., Bill Withers
TITLE: Just the Two of Us
 
Capo 1st fret
 
Chords:
Cmaj7    x32000
B7       x21202
Em7      022030
Ebm7     x11x2x
G7       320001
 
 
[Intro]
 
Cmaj7    B7    Em7    Dm7  G7  Cmaj7    B7    Em7      x2
 
 
[Verse 1]
 
Cmaj7       B7              Em7
I see the crystal raindrops fall,
          Dm7   G7    Cmaj7
 and the beauty of it all
          B7            Em7
 Is when the sun comes shining through
Cmaj7       B7              Em7
To make those rainbows in my mind,
             Dm7   G7    Cmaj7
When I think of you sometime,
              B7                   Em7
And I want to spend some time with you.
 
 
[Chorus]
 
         Cmaj7    B7             Em7   Ebm7   Dm7
Just the two of us,    we can make it if we try,
G7       Cmaj7         B7            Em7
Just the two of us,    just the two of us.
         Cmaj7    B7             Em7   Ebm7   Dm7
Just the two of us,  building castles in the sky,
G7       Cmaj7     B7         Em7
Just the two of us,   you and I.
 
 
[Verse 2]
 
Cmaj7       B7              Em7
We look for love, no time for tears,
           Dm7   G7    Cmaj7
wasted water's all that is,
          B7            Em7
And it don't make no flowers grow.
Cmaj7       B7              Em7
Good things might come to those who wait,
                 Dm7   G7    Cmaj7
But not for those who wait too late
             B7               Em7
We've got to go for all we know.
 
 
[Chorus]
 
         Cmaj7    B7             Em7   Ebm7   Dm7
Just the two of us,    we can make it if we try,
G7       Cmaj7         B7            Em7
Just the two of us,    just the two of us.
         Cmaj7    B7             Em7   Ebm7   Dm7
Just the two of us,  building castles in the sky,
G7       Cmaj7      B7        Em7
Just the two of us,   you and I.
 
 
[Solo] (all positions relative to capo on 1st fret)
 
   Cmaj7        B7          Bbmaj7       A7        Abmaj7       G7           Cmaj7   F13
e|-7--5-------7--5h7------|-5--3-------5---------|-------------------------|---------10----------|
B|------8--5--------------|------6--3------------|-8--6-------8--6h8----6--|-----8---------------|
G|------------------------|----------------------|------8--5---------------|-9-------------------| x2
D|------------------------|----------------------|-------------------------|---------------------|
A|------------------------|----------------------|-------------------------|---------------------|
E|------------------------|----------------------|-------------------------|---------------------|
 
 
[Interlude]
 
Cmaj7    B7    Em7    Dm7  G7  Cmaj7    B7    Em7
 
 
[Verse 3]
 
Cmaj7       B7               Em7          Dm7   G7    Cmaj7
I hear the crystal raindrops fall on the window down the hall
          B7            Em7
And it becomes the morning dew.
 
Cmaj7       B7               Em7          Dm7   G7    Cmaj7
And Darling, when the morning comes And I see the morning sun,
             B7                   Em7
I want to be the one with you.
 
 
[Chorus]
 
         Cmaj7    B7             Em7   Ebm7   Dm7
Just the two of us,    we can make it if we try,
G7       Cmaj7         B7            Em7
Just the two of us,    just the two of us.
          Cmaj7    B7               Em7   Ebm7   Dm7
Just the two of us,  building big castles way on high,
G7       Cmaj7         B7     Em7
Just the two of us,   you and I.
X""",
        artist_id=newArtist.id,
        author_id=1,
        song_name="Just The Two Of Us",
        key="G",
        version=1,
        genre_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    songs_list.append(just_the_two_of_us)
    
    newArtist = Artist(
        name="John Lennon",
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(newArtist)
    db.session.commit()
    
    imagine = Songsheet(
        title="Imagine",
        body="""\nTabbed by John_Lennon28@hotmail.com.
Edited by UG user maguri
John Lennon
Imagine (1971)
(Lennon)
From "Imagine"
 
[Intro]
  C          Cmaj7 F                 Cadd9      Cmaj7 F
e|----------------|-----------------|----------------|-----------------|
B|------------0---|---------------0-|3---3---3---0---|---------------0-|
G|0---0---0---0---|2---2---2---2h3--|0---0---0---0---|2---2---2---2h3--|
D|2---2---2---2---|3---3---3--------|2---2---2---2---|3---3---3--------|
A|--3---3---3---3-|-----------------|--3---3---3---3-|-----------------|
E|----------------|--1---1---1------|----------------|--1---1---1------|
  1 & 2 & 3 & 4 &  1 & 2 & 3 & 4  &  1 & 2 & 3 & 4 &  1 & 2 & 3 & 4  &
 
[Verse]
  Cadd9      Cmaj7 F                 Cadd9      Cmaj7 F
e|----------------|-----------------|----------------|-----------------|
B|3---3---3---0---|---------------0-|3---3---3---0---|---------------0-|
G|0---0---0---0---|2---2---2---2h3--|0---0---0---0---|2---2---2---2h3--|
D|2---2---2---2---|3---3---3--------|2---2---2---2---|3---3---3--------|
A|--3---3---3---3-|-----------------|--3---3---3---3-|-----------------|
E|----------------|--1---1---1------|----------------|--1---1---1------|
  1 & 2 & 3 & 4 &  1 & 2 & 3 & 4  &  1 & 2 & 3 & 4 &  1 & 2 & 3 & 4  &
 
CHORDS and special voicings
 
C      x-3-2-0-1-0        G     3-x-0-0-0-3
Cmaj7  x-3-2-0-0-0        C/G   3-x-2-0-1-0 or 3-3-2-0-1-0
F      x-x-3-2-1-1        G7    3-x-0-0-3-1
Am/E   x-x-2-2-1-0        E     0-2-2-1-0-0
                          E7    0-2-2-1-3-x
 
Dm7    x-x-0-2-1-1  (or Dm   x-x-0-2-3-1)
F/C    x-3-x-2-1-1  (or Dm/C x-3-x-2-3-1)
 
All the C chords in the verses are actually Cadd9 (x-3-2-0-3-0).
Use it for special flavour.
 
The Dm7 and F/C chords in the Bridges can also be played as
regular Dm and Dm/C respectively (voicings: see above). Choose
whatever sounds best to you.
 
 
[Intro]
| C    Cmaj7 |  F  |
| C    Cmaj7 |  F  |
 
[Verse 1]
C                Cmaj7 F
 Imagine there's no    heaven
C             Cmaj7 F
 It's easy if you   try
C        Cmaj7 F
 No hell below us
C          Cmaj7 F
  Above us only  sky
 
[Bridge 1]
F        Am/E    Dm7   F/C
 Imagine all the people
G          C/G  G7
Living for to - day a-hah
 
[Verse 2]
C                 Cmaj7 F
  Imagine there's no    countries
C               Cmaj7 F
  It isn't hard to    do
C                 Cmaj7 F
  Nothing to kill or    die for
C             Cmaj7 F
  And no religion   too
 
[Bridge 2]
F        Am/E    Dm7   F/C
 Imagine all the people
G           C/G G7
Living life in  peace - you-hou-hou-ou-ou
 
[Chorus]
F         G          C    Cmaj7  E  E7
  You may say I'm a dreamer
F         G             C  Cmaj7  E  E7
  But I'm not the only one
F            G           C    Cmaj7  E  E7
 I hope some day you'll join us
F         G          C
  And the world will be as one
 
[Verse 3]
C             Cmaj7 F
   Imagine no pos - sessions
C             Cmaj7 F
  I wonder if you   can
C                  Cmaj7 F
 No need for greed or    hunger
C              Cmaj7 F
 A brotherhood of    man
 
[Bridge 3]
F        Am/E    Dm7   F/C
 Imagine all the people
G           C/G G7
Sharing all the world - you-hou-hou-ou
 
[Chorus]
F         G          C    Cmaj7  E  E7
  You may say I'm a dreamer
F         G             C  Cmaj7  E  E7
  But I'm not the only one
F            G           C    Cmaj7  E  E7
 I hope some day you'll join us
F         G          C
  And the world will live as one
 
 
*************************
 
| h  Hammer-on
| x  Dead note
 
*************************
X""",
        artist_id=newArtist.id,
        author_id=1,
        song_name="Imagine",
        key="C",
        version=1,
        genre_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    songs_list.append(imagine)
    
    newArtist = Artist(
        name="David Bowie",
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(newArtist)
    db.session.commit()
    
    space_oddity = Songsheet(
        title="Space Oddity",
        body="""\n[Intro]
| Fmaj7 | Em   | Fmaj7 | Em   |
| Fmaj7 | Em   | Fmaj7 | Em   |
 
[Pre-Verse]
C                           Em
  Ground control to Major Tom
C                           Em
  Ground control to Major Tom
Am          Am/G              D7/F#
  Take your protein pills and put your helmet on
C                           Em
  Ground control to Major Tom
C                              Em
  Commencing countdown engines on
Am        Am/G           D7/F#
  Check ignition and may God's love be with you
 
[Verse 1]
C                                E7
This is ground control to Major Tom
                         F
You've really made the grade
        Fm              C                    F
And the papers want to know whose shirt you wear
         Fm                 C              F
Now it's time to leave the capsule if you dare
  C                              E7
This is Major Tom to ground control
                          F
I'm stepping through the door
         Fm            C             F
And I'm floating in a most peculiar way
         Fm              C           F
And the stars look very different today
 
[Chorus]
    Fmaj7     Em
For here am I sitting in a tin can
Fmaj7         Em
Far above the world
Bb              Am               G             F
Planet Earth is blue and there's nothing I can do
 
[Instrumental]
| C  F  G   A A   |
| C  F  G   A A   |
| Fmaj7   | Em      | A       |
| C       | D       | E       |
 
[Verse 2]
C                                      E7
Though I'm past one hundred thousand miles
                   F
I'm feeling very still
       Fm                 C                  F
And I think my spaceship knows which way to go
         Fm              C             F
Tell my wife I love her very much she knows
 
[Bridge]
G                 E7              Am                      C/G
Ground control to Major Tom, your circuit's dead, there's something wrong
        D7/F#
Can you hear me Major Tom?
        C
Can you hear me Major Tom?
        G
Can you hear me Major Tom? Can you...
 
[Chorus]
Fmaj7     Em
Here am I floating 'round my tin can
Fmaj7         Em
Far above the Moon
Bb              Am               G             F
Planet Earth is blue and there's nothing I can do
 
[Outro]
| C  F  G   A A   |
| C  F  G   A A   |
| Fmaj7   | Em      | A       |
| C       | D       | E       |
X""",
        artist_id=newArtist.id,
        author_id=1,
        song_name="Space Oddity",
        key="C",
        version=1,
        genre_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    songs_list.append(space_oddity)
    
    newArtist = Artist(
        name="Pixies",
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(newArtist)
    db.session.commit()
    
    where_is_my_mind = Songsheet(
        title="Where Is My Mind",
        body="""\n[Intro]
Ooh - Stop
E   C#m   G#   A   x2
 
   E                 C#m               G#                A
e|-----4-------4---|-----4-------4---|-----4-------4---|-0---0---0---0---|
B|-5-------5-------|-5-------5-------|-4-------4-------|-5---5p4-5---5-0-|
G|-----------------|-----------------|-----------------|-----------------|  x2
D|-----------------|-----------------|-----------------|-----------------|
A|-----------------|-----------------|-----------------|-----------------|
E|-----------------|-----------------|-----------------|-----------------|
 
[Verse]
           E                        C#m               G#  A
 With your feet in the air and your head on the ground
E    C#m            G#       A
 Try this trick and spin it, yeah
E                  C#m
 Your head will collapse
            G#
But there's nothing in it
           A
And you'll ask yourself
 
[Chorus]
E            C#m
 Where is my mind?
G#           A
 Where is my mind?
     E       C#m   G#  A    E  C#m  G#  A
 Where is my mind?
 E   G#         A             Am        C#m   B
 Way out in the water, see it swimming.
 
[Verse]
E                        C#m    G#  A
I was swimmin' in the Caribbean
E             C#m                  G#  A
   Animals were hiding behind the rock
E                    C#m
   Except the little fish
          G#
But they told me, he swears
           A
Tryin' to talk to me, coy koi
 
[Chorus]
E            C#m
 Where is my mind?
G#           A
 Where is my mind?
     E       C#m   G#  A    E  C#m  G#  A
 Where is my mind?
 E   G#         A             Am        C#m   B
 Way out in the water, see it swimming.
 
[Solo]
e|-------------------------------|-------------------------10--12--14b-|
B|--7---7---7--7-----------------|--------7--7/10--10--12--------------|
G|--9b--9b--------9--7--7--7-----|--7--9-------------------------------|
D|----------------------------9--|-------------------------------------|
A|-------------------------------|-------------------------------------|
E|-------------------------------|-------------------------------------|
 
[Verse]
           E                        C#m               G#  A
 With your feet in the air and your head on the ground
E    C#m            G#       A
 Try this trick and spin it, yeah
E                  C#m
 Your head will collapse
            G#
But there's nothing in it
           A
And you'll ask yourself
 
[Chorus]
E            C#m
 Where is my mind?
G#           A
 Where is my mind?
     E       C#m   G#  A    E  C#m  G#  A
 Where is my mind?
 E   G#         A             Am        C#m   B
 Way out in the water, see it swimming.
 
[Outro]
E  C#m  G#  A
E  C#m  G#  A
 
 
***********************************
 
| /   Slide up
| p   Pull-off
| b   Bend
 
**********************************
X""",
        artist_id=newArtist.id,
        author_id=1,
        song_name="Where Is My Mind",
        key="E",
        version=1,
        genre_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    songs_list.append(where_is_my_mind)
    
    newArtist = Artist(
        name="Elton John",
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(newArtist)
    db.session.commit()
    
    your_song = Songsheet(
        title="Your Song",
        body="""\nElton John - Your Song
 
A capo on the 1st fret puts
it in the Original Key of Eb
 
Chords used:
D     = xx0232
G     = 320033
A     = x02220
F#m   = 244222
Bm    = x24432
Em7   = 022033
Bm/A  = x04430
Bm/G# = 4x4430
A/C#  = x42220
 
 
[Intro]
D   G   A   G
 
 
[Verse 1]
D                 Gmaj7  A/C#             F#m
It's a little bit funny,   this feeling inside
Bm             Bm/A       Bm/G#      Gmaj7
I'm not one of those who can easily hide
D                  A        F#         Bm
I don't have much money, but boy, if I did
D             Em7        G               A
I'd buy a big house where we both could live
 
D             Gmaj7  A/C#              F#m
If I was a sculptor,   but then again, no
     Bm            Bm/A       Bm/G#         G
Or a man who makes potions in a travelling show
   D             A                 F#        Bm
I know it's not much but it's the best I can do
D              Em7     G                D
My gift is my song, and this one's for you
 
 
[Chorus]
A/C#              Bm      Em7            Gmaj7
And you can tell everybody this is your song
A/C#       Bm            Em               G
It may be quite simple but now that it's done
Bm                    Bm/A
I hope you don't mind, I hope you don't mind
Bm/G#                G6
That I put down in words,
      D/F#    Em            G             A
How wonderful life is while you're in the world
 
 
[Interlude]
D   G   A   G
 
 
[Verse 2]
D            Gmaj7  A/C#                 F#m
I sat on the roof     and kicked off the moss
        Bm          Bm/A              Bm/G#           Gmaj7
Well a few of the verses, well they've got me quite cross
D                    A        F#                   Bm
But the sun's been quite kind, while I wrote this song
D                    Em7     G                A
It's for people like you that keep it turned on
 
D               Gmaj7    A/C#                F#m
So excuse me forgetting,   but these things I do
Bm               Bm/A              Bm/G#             Gmaj7
You see I've forgotten if they're green or they're blue
D                  A                 F#     Bm
Anyway, the thing is, what I really mean
D               Em7        G              D
Yours are the sweetest eyes I've ever seen
 
 
[Chorus]
A/C#              Bm      Em7            G
And you can tell everybody this is your song
A/C#       Bm            Em               G
It may be quite simple but now that it's done
Bm                    Bm/A
I hope you don't mind, I hope you don't mind
Bm/G#                G6
That I put down in words,
      D        Em            G              A
How wonderful life is while you're in the world
 
Bm                   Bm/A
I hope you don't mind, I hope you don't mind
Bm/G#                G6
That I put down in words,
     D/F#     Em            G             D       G/D   A/D   G/D   D
How wonderful life is while you're in the world
 
 
 
 
-----------------------------------------------------
Transcribed by: Ian C.T. vom Saal
May 2, 2002
----------------------------------------------------
X""",
        artist_id=newArtist.id,
        author_id=1,
        song_name="Your Song",
        key="Eb",
        version=1,
        genre_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    songs_list.append(your_song)
    
    newArtist = Artist(
        name="Radiohead",
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(newArtist)
    db.session.commit()
    
    no_surprises = Songsheet(
        title="No Surprises",
        body="""\n[Intro]
   D                         Gm         *
e|-2-------2-------|-2-------------0-|
B|-----3-------3---|-----3-------3---|
G|---2---2---2---2-|---2---2-0-3-----|  (x4)
D|-----------------|-----------------|
A|-----------------|-----------------|
E|-----------------|-----------------|
 
(You can play the intro part for D and Gm * throughout the song)
 
[Verse]
  D
A heart that's full up
       Gmaj7/B
Like a landfill
                  Em         A       Asus4
A job that slowly kills you, bruises that won't
D    Gm *
Heal
 
D
You look so tired, unhappy
Gmaj7/B
Bring down the government
Em          A          Asus4
They don't, they don't speak for
D  Gm *
Us
 
D
I'll take a quiet life
  Gmaj7/B
A handshake of carbon monoxide and
 
 
[Chorus]
Em            A     Asus4
No alarms and no surprises
Em            A     Asus4
No alarms and no surprises
Em            A     Asus4
No alarms and no surprises
D      Gm *
Silent
D      Gm *
Silent
 
 
[Bridge]
D
This is my final fit
   Gmaj7/B
My final bellyache with
 
 
[Chorus]
Em            A     Asus4
No alarms and no surprises
Em            A     Asus4
No alarms and no surprises
Em            A     Asus4
No alarms and no surprises
D      Gm *
Please
 
 
[Instrumental]
A  Gm
A  Gm
Em Gm
 
 
[Bridge]
D
Such a pretty house and
Gmaj7/B
Such a pretty garden
 
 
[Chorus]
Em            A     Asus4
No alarms and no surprises
Em            A     Asus4
No alarms and no surprises
Em            A     Asus4
No alarms and no surprises
D      Gm *
Please
 
 
[Outro]
D  Gm *   D (single strum)
X""",
        artist_id=newArtist.id,
        author_id=1,
        song_name="No Surprises",
        key="F",
        version=1,
        genre_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    songs_list.append(no_surprises)
    
    newArtist = Artist(
        name="Amy Winehouse",
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(newArtist)
    db.session.commit()
    
    back_to_black = Songsheet(
        title="Back To Black",
        body="""\nPlay the strumming patterns throughout the song, varying them and with little variations as you wish.
 
 
[Intro]
Dm  Gm  Bb  A
 
[Verse 1]
Dm                     Gm
 He left no time to re-gret,
              Bb                          A
Kept his dick wet, with his same old safe bet.
Dm                 Gm
 Me... and my head high,
             Bb                  A
And my tears dry; get on without my guy.
 
[Verse 2]
Dm                         Gm
 You went back to what you knew,
       Bb                             A
So far removed, from all that we went through.
    Dm                    Gm
And I... tread a troubled track,
            Bb                    A
My odds are stacked; I'll go back to black.
 
[Chorus 1]
Dm                         Gm
 We only said goodbye with words; I died a hundred times.
Bb                     A             N.C.           Dm
 You go back to her and I go back to...I go back to us.
 
[Verse 3]
Dm          Gm
 I love you much,
           Bb                         A
It's not e-nough; you love blow and I love puff.
    Dm             Gm
And life is like a pipe,
               Bb                         A
And I'm a tiny penny rolling up the walls inside.
 
[Chorus 2]
Dm                         Gm
 We only said goodbye with words; I died a hundred times.
Bb                      A
 You go back to her and I go back to...
Dm                         Gm
 We only said goodbye with words; I died a hundred times.
Bb                      A
 You go back to her and I go back to...
 
[Break]
N.C.
 
[Bridge 1]
Dm        Bbmaj7
 Black... black,
F         A
 Black... black.
Dm        Bbmaj7
 Black... black,
F         A              A7
 Black... I go back to... I go back to...
 
[Chorus 3]
Dm                         Gm
 We only said goodbye with words; I died a hundred times.
Bb                      A
 You go back to her and I go back to...
Dm                         Gm
 We only said goodbye with words; I died a hundred times.
Bb                      A            Dm
 You go back to her and I go back to black.
X""",
        artist_id=newArtist.id,
        author_id=1,
        song_name="Back To Black",
        key="Dm",
        version=1,
        genre_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    songs_list.append(back_to_black)
    
    newArtist = Artist(
        name="Backstreet Boys",
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(newArtist)
    db.session.commit()
    
    i_want_it_that_way = Songsheet(
        title="I Want It That Way",
        body="""\n[Intro]
Em  C  G
   yeah
Em  C  G
 
[Verse]
        Em     C  G
You are    my fire
       Em      C G
The one    desire
       Em      C  G
Believe   when I say
Em          D   G
I want it that way
      Em      C   G      Em
But we   are two worlds apart
       C    G        Em
Can't reach to your heart
      C   G
When you say
     Em         D    G
That I want it that way
 
[Chorus]
         C
Tell me why
                     D     Em
(Ain't nothin' but a heartache)
         C
Tell me why
                    D    Em
(Ain't nothin' but a mistake) 
          C
(Tell me why)
               D        G
I never wanna hear you say
 Em         D    G
(I want it that way)
 
[Verse]
     Em     C G
Am I   your fire
        Em     C G
Your one    desire
      Em         C    G
Yes I know, it's too late
    Em         D    G
But I want it that way
 
[Chorus]
         C
Tell me why
                     D     Em
(Ain't nothin' but a heartache)
         C
Tell me why
                     D    Em
(Ain't nothin' but a mistake) 
          C
(Tell me why)
               D        G
I never wanna hear you say
 Em         D    B
(I want it that way)
 
[Bridge]
Em                         G/D
Now I can see that we're falling apart
          C                  Am    D
From the way that it used to be, yeah
     Em                   G/D
No matter the distance I want you to know
      C                  D
That deep down inside of me...
 
[Verse]
        Em     C  G
You are    my fire
       Em      C G
The one    desire
     C
You are
             D        G     Em       D
You are, you are, you are  (I want it...)
 
[Chorus]
D
  Don't wanna hear you (say)
D                    E   F#m
Ain't nothin' but a heartache
D                    E  F#m
Ain't nothin' but a mistake
D              E        A
I never wanna hear you say
F#m           E    A
   I want it that way
 
[Chorus]
         D
Tell me why
                    E    F#m
Ain't nothin' but a heartache
         D
Tell me why
                    E  F#m
Ain't nothin' but a mistake
         D
Tell me why
               E        A
I never wanna hear you say
F#m        E    A
I want it that way
         D
Tell me why
                    E    F#m
Ain't nothin' but a heartache
D                     E  F#m
  Ain't nothin' but a mistake
         D
Tell me why
               E        A
I never wanna hear you say
F#m        E    A
I want it that way
      F#m         E    A
Cause, I want it that way
X""",
        artist_id=newArtist.id,
        author_id=1,
        song_name="I Want It That Way",
        key="F#m",
        version=1,
        genre_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    songs_list.append(i_want_it_that_way)
    
    newArtist = Artist(
        name="Fleetwood Mac",
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(newArtist)
    db.session.commit()
    
    dreams = Songsheet(
        title="Dreams",
        body="""\nSong: Dreams
Band: Fleetwood Mac
Album: Dreams single 1977
Tabbed: Daniel Thomas (dt_69er@hotmail.com)
Tuning: EADGBE
 
CHORDS USED:
Fmaj7  1x221x
F      133211
G      320003
G6     32000x
 
 
[Intro]
 
F     G      F      G
 
 
[Verse]
 
F            G
Now here you go again
       F               G
You say you want your freedom
F            G                 F        G
Well, who am I to keep you down?
F             G                 F                 G
It's only right that you should play the way you feel it
       F        G             F
But listen carefully to the sound
         G                  F                    G
Of your loneliness, like a heartbeat, drives you mad
          F           G                    F      G
In the stillness of remembering what you had
              F           G
And what you lost
              F           G
And what you had 
              F           G
And what you lost
 
 
[Chorus]
 
    Fmaj7          G6               Fmaj7          G
Oh  thunder only happens when it's raining
Fmaj7         G6                    Fmaj7          G
Players only love you when they're playing
    Fmaj7             G6               Fmaj7      G
Say women they will come and they will go
Fmaj7             G6                  Fmaj7        G
When the rain washes you clean, you'll know
       Fmaj7
You'll know
 
 
[Instrumental Break]
 
|(Fmaj7)| G    | G    | F    |
 
| Am    | G    | G    | F    |
 
 
[Verse]
 
F          G
Now here I go again
   F               G
I see your crystal visions
F          G             F          G
I keep my visions to myself
F           G                F                 G
It's only me who wants to wrap around you dreams and,
F             G                    F
Have you any dreams you'd like to sell
            G               F                    G
Dreams of loneliness like a heartbeat drives you mad
        F             G                    F           G
In the stillness of remembering what you had
              F          G
And what you lost
              F          G
And what you had
                  F          G
Ooh, and what you lost
 
 
[Chorus]
 
     Fmaj7           G6               Fmaj7          G
Oh,  thunder only happens when it's raining
Fmaj7         G6                     Fmaj7          G
Players only love you when they're playing
     Fmaj7             G6               Fmaj7       G
Say, women, they will come and they will go
Fmaj7             G6                  Fmaj7         G
When the rain washes you clean, you'll know
 
      Fmaj7            G6             Fmaj7          G
Oh,  thunder only happens when it's raining
Fmaj7         G6                     Fmaj7          G
Players only love you when they're playing
     Fmaj7             G6               Fmaj7       G
Say, women, they will come and they will go
Fmaj7             G6                 Fmaj7      G
When the rain washes you clean, you'll know
       Fmaj7     G
You'll know
         Fmaj7   G
You will know
       Fmaj7
Ahh, you'll know
X""",
        artist_id=newArtist.id,
        author_id=1,
        song_name="Dreams",
        key="F",
        version=1,
        genre_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    songs_list.append(dreams)
    
    newArtist = Artist(
        name="Louis Armstrong",
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(newArtist)
    db.session.commit()
    
    what_a_wonderful_world = Songsheet(
        title="What A Wonderful World",
        body="""\n[Verse 1]
 
       C        Em     F         Em
I see trees of green, red roses too
Dm         C       E7         Am
I see them bloom, for me and you
      Ab            Dm7        G          C     G
And I think to myself, what a wonderful world
 
 
[Verse 2]
 
      C        Em        F         Em
I see skies of blue and clouds of white
Dm                 C        E7           Am
The bright blessed day, the dark sacred night
      Ab            Dm7        G          C
And I think to myself, what a wonderful world
 
 
[Bridge]
 
    G                         C
The colours of the rainbow, so pretty in the sky
G                       C
Are also on the faces of people going by
        Am             Em          Am         Em
I see friends shaking hands saying how do you do
F             Em    Dm   C   G
They’re really saying I love you
 
 
[Verse 3]
 
       C      Em        F           Em
I hear babies crying, I watch them grow
Dm              C             E7        Am
They'll learn much more than I'll ever know
      Ab              Dm7     G           C    Bb7   A7
And I think to myself, what a wonderful world
 
      Fmaj7           Dm7      G          C
Yes I think to myself, what a wonderful world
X""",
        artist_id=newArtist.id,
        author_id=1,
        song_name="What A Wonderful World",
        key="F",
        version=1,
        genre_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    songs_list.append(what_a_wonderful_world)
    
    newArtist = Artist(
        name="a-ha",
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(newArtist)
    db.session.commit()
    
    take_on_me = Songsheet(
        title="Take On Me",
        body="""\n[Intro]
Bm9
Bm
 
[Riff]
   Bm        E              A         D      A/C#
e|-2-2-------0-0--0-4-4-5-7-5-5-5-0---2-2--2-0-0-2-0-|
B|-----3-0-0------------------------3----------------|
G|---------------------------------------------------|
D|---------------------------------------------------| x2
A|---------------------------------------------------|
E|---------------------------------------------------|
 
   Bm        E              D/F#      Esus2  E
e|-2-2-------0-0--0-4-4-5-7-5-5-5-2---2-2--2-0-0-0---|
B|-----3-0-0------------------------3----------------|
G|---------------------------------------------------|
D|---------------------------------------------------| x1
A|---------------------------------------------------|
E|---------------------------------------------------|
 
[Verse 1]
Bm          E  A                D       A/C#
Talking away,  I don’t know what I’m to say
     Bm          E    A             D      A/C#
I’ll say it anyway, today’s another day to find you
Bm        E   F#m                      D
  Shyin' away, I’ll be coming for your love, OK?
 
[Chorus]
A   E/G# F#m  D
Take on me  (take on me)
A   E/G# F#m  D
Take me on  (take on me)
A   E/G# F#m  D
I’ll be gone
           A  E  D/F#  E
in a day or two
 
[Verse 2]
    Bm            E     A             D         A/C#
So, needless to say I'm odds and ends, but I'll be
Bm          E   A                    D        A/C#
stumbling awake slowly learning that life is OK
Bm         E  F#m                   D
Say after me,  it’s no better to be safe than sorry
 
[Chorus]
A   E/G# F#m  D
Take on me  (take on me)
A   E/G# F#m  D
Take me on  (take on me)
A   E/G# F#m  D
I’ll be gone
           A  E  D/F#  E
in a day or two
 
[Instrumental]
C#m G
C#m G
Bm  E
 
   Bm        E              Bm        E
e|-2-2-------0-0--0-4-4-5-7-2-2-------0-0--0-4-4-5-7-|
B|-----3-0-0--------------------3-0-0----------------|
G|---------------------------------------------------|
D|---------------------------------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|
 
   Bm        E              A         D      A/C#
e|-2-2-------0-0--0-4-4-5-7-5-5-5-0---2-2--2-0-0-2-0-|
B|-----3-0-0------------------------3----------------|
G|---------------------------------------------------|
D|---------------------------------------------------| x2
A|---------------------------------------------------|
E|---------------------------------------------------|
 
   Bm        E              D/F#      Esus2  E
e|-2-2-------0-0--0-4-4-5-7-5-5-5-2---2-2--2-0-0-0---|
B|-----3-0-0------------------------3----------------|
G|---------------------------------------------------|
D|---------------------------------------------------| x1
A|---------------------------------------------------|
E|---------------------------------------------------|
 
[Verse 3]
        Bm                E        A            D        A/C#
Oh, the things that you say, yeah, is it life or just to play
   Bm         E         A                   D        A/C#
My worries away, you’re all the things I’ve got to remember
Bm                 E   F#m                  D
   You are shying away, I’ll be coming for you anyway
 
[Chorus]
A   E/G# F#m  D
Take on me  (take on me)
A   E/G# F#m  D
Take me on  (take on me)
A   E/G# F#m  D
I’ll be gone
    A   E/G# F#m  D
In a day
    Take on me  (take on me)
 
A   E/G# F#m  D
Take me on  (take on me)
A   E/G# F#m  D
I’ll be gone (take on me)
    A   E/G# F#m  D
In a day
    Take me on
 
(Fade out)
A   E/G# F#m  D ...
X""",
        artist_id=newArtist.id,
        author_id=1,
        song_name="Take On Me",
        key="A",
        version=1,
        genre_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    songs_list.append(take_on_me)
    
    newArtist = Artist(
        name="Bee Gees",
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(newArtist)
    db.session.commit()
    
    how_deep_is_your_love = Songsheet(
        title="How Deep Is Your Love",
        body="""\nHOW DEEP IS YOUR LOVE
Capo 1
 
[Intro]
D  Dmaj7  Gmaj7  G/A
D  Dmaj7  Gmaj7  G/A
 
[Verse 1]
             D          F#m7    Em7
I know your eyes in the morning sun
B7         Em7             F#7      G/A
I feel you touch me in the pouring rain
        D               F#m7   Bm7
And the moment that you wander far from me
        Em7                   G/A
I wanna feel you in my arms again
 
[Pre-Chorus]
         Gmaj7           F#m7
Then you come to me on a summer breeze
        Em7                         C9
Keep me warm in your love, then you softly leave
         F#m7           G/A
And it's me you need to show
 
[Chorus]
    D
How deep is your love
                           Dmaj7
How deep is your love, how deep is your love
Gmaj7              Gm6
I really mean to learn
             D                    Am/C               B7
'Cause we're living in a world of fools, breaking us down
                            Em7       Gm6            D
When they all should let us be, we belong to you and me
 
[Verse 2]
     F#m7    Em7
I believe in you
B7            Em7       F#7   G/A
You know the door to my very soul
            D          F#m7    Bm7
You're the light in my deepest darkest hour
          Em7            G/A
You're my saviour when I fall
        Gmaj7           F#m7
And you may not think I care for you
         Em7                      C9
When you know down inside that I really do
        F#m7             G/A
And it's me you need to show, 
 
[Chorus]
    D
How deep is your love
                           Dmaj7
How deep is your love, how deep is your love
Gmaj7              Gm6
I really mean to learn
             D                    Am/C               B7
'Cause we're living in a world of fools, breaking us down
                            Em7       Gm6            D
When they all should let us be, we belong to you and me
 
[Instrumental]
D       F#m7    Em7   B7
Em7     F#7     G/A
D       F#m7    Bm7
Em7     G/A
 
[Pre-Chorus]
         Gmaj7           F#m7
Then you come to me on a summer breeze
        Em7                         C9
Keep me warm in your love, then you softly leave
         F#m7               G/A
And it's me you need to show
 
[Chorus]
    D
How deep is your love
                           Dmaj7
How deep is your love, how deep is your love
Gmaj7              Gm6
I really mean to learn
              D                    Am/C              B7
'Cause we're living in a world of fools, breaking us down
                            Em7       Gm6            D
When they all should let us be, we belong to you and me
 
[Interlude]
D  F#m7  G/A
 
[Chorus]
    D                      Dmaj7
How deep is your love, how deep is your love
Gmaj7              Gm6
I really mean to learn
              D                   Am/C               B7
'Cause we're living in a world of fools, breaking us down
                            Em7       Gm6            D     G/A
When they all should let us be, we belong to you and me
 
    D                      Dmaj7
How deep is your love, how deep is your love
Gmaj7              Gm6
I really mean to learn
             D                    Am/C               B7
'Cause we're living in a world of fools, breaking us down
                            Em7       Gm6            D
When they all should let us be, we belong to you and me
X""",
        artist_id=newArtist.id,
        author_id=1,
        song_name="How Deep Is Your Love",
        key="Eb",
        version=1,
        genre_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    songs_list.append(how_deep_is_your_love)
    
    newArtist = Artist(
        name="The White Stripes",
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(newArtist)
    db.session.commit()
    
    seven_nation_army = Songsheet(
        title="Seven Nation Army",
        body="""""",
        artist_id=newArtist.id,
        author_id=1,
        song_name="Seven Nation Army",
        key="no capo",
        version=1,
        genre_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    songs_list.append(seven_nation_army)
    
    newArtist = Artist(
        name="Lynyrd Skynyrd",
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(newArtist)
    db.session.commit()
    
    sweet_home_alabama = Songsheet(
        title="Sweet Home Alabama",
        body="""\n[Intro Riff]
                                      (w/ fills)
e|-------------------------|-------3------------|
B|-------3-----------3-----|-------3------------|
G|---------2-----------0---|-------0------------| x4
D|-0--0--------------------|-------0------------|
A|-------------3--3--------|-------2------------|
E|-------------------------|-3--3--3------------|
 
 
[Intro]
D Cadd9 G  x4
 
 
[Verse 1]
D     Cadd9          G
  Big wheels keep on turning
D          Cadd9          G
  Carry me home to see my kin
D         Cadd9           G
  Singing songs about the south land
D             Cadd9      G
  I miss ole 'bamy once again and I think it's a sin
 
 
[Interlude]
D Cadd9 G  x2
 
 
[Verse 2]
D                  Cadd9       G
  Well, I heard Mr Young sing about her
D                   Cadd9        G
  Well, I heard old Neil put her down
D                   Cadd9        G
  Well, I hope Neil Young will remember
D            Cadd9               G
  A southern man don't need him around, anyhow
 
 
[Chorus]
D       Cadd9   G    D          Cadd9        G
  Sweet home Alabama, where the skies are so blue
D       Cadd9   G    D          Cadd9          G    F C
  Sweet home Alabama, Lord, I'm coming home to you
 
 
[Solo]
D Cadd9 G  x2
 
 
[Verse 3]
D           Cadd9             G        F   C   D
  In Birmingham they love the Gov'nor, boo-hoo-hoo
(D)          Cadd9             G
  Now we all did what we could do
D          Cadd9        G
  Now Watergate does not bother me
D           Cadd9             G
  Does your conscience bother you (tell the truth!)
 
 
[Chorus]
D       Cadd9   G    D          Cadd9        G
  Sweet home Alabama, where the skies are so blue
D       Cadd9   G    D          Cadd9          G
  Sweet home Alabama, Lord, I'm coming home to you
 
(Here I come, Alabama)
 
 
[Solo]
D Cadd9 G  x8
 
[Interlude]
D Cadd9 G  x2
 
 
[Verse 4]
D            Cadd9              G
  Now Muscle Shoals has got the Swampers
D                  Cadd9                   G
  And they've been known to pick a song or two (yes, we do)
D            Cadd9      G
  Lord, they get me off so much
D              Cadd9               G
  They pick me up when I'm feeling blue, now how 'bout you?
 
 
[Chorus]
D       Cadd9   G    D          Cadd9        G
  Sweet home Alabama, where the skies are so blue
D       Cadd9   G    D          Cadd9          G    F C
  Sweet home Alabama, Lord, I'm coming home to you
 
D       Cadd9   G
  Sweet home Alabama (Oh, sweet home baby)
D           Cadd9        G
  Where the skies are so blue (And the governor's true)
D       Cadd9   G
  Sweet Home Alabama, (Lord, yeah)
D           Cadd9          G
  Lord, I'm coming home to you (Yeah, yeah)
 
 
[Outro]
D Cadd9 G  x6
 
(fade out)
X""",
        artist_id=newArtist.id,
        author_id=1,
        song_name="Sweet Home Alabama",
        key="G",
        version=1,
        genre_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    songs_list.append(sweet_home_alabama)
    
    newArtist = Artist(
        name="Arctic Monkeys",
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(newArtist)
    db.session.commit()
    
    do_i_wanna_know_acoustic = Songsheet(
        title="Do I Wanna Know Acoustic",
        body="""\nDo I Wanna Know by Arctic Monkeys
Tabbed by: DoIWannaKnow (Berkin Aksu)
Based on: www.youtube.com/watch?v=YQfd8tqf14Q
 
CAPO on 3rd fret. (You can also play without the capo)
Standart tuning
 
Chords:                        NO CAPO
 
Em =  022000    ------>  Gm= 355333 or x55333 (suits better)
C  =  x32010    ------>  D#= x68886
Am =  x02210    ------>  Cm= x35543
B  =  x24442    ------>  D = xx0232
D  =  xx0232    ------>  F = 133211 or x33211 (suits better) 
 
 
[Verse]
 
Em                            C     Am
 Have you got colour in your cheeks?
Am                                        Em
 Do you ever get the fear that you can't shift the type
                         Em
that sticks around like summat in your teeth?
                C             Am
Are there some aces up your sleeve?
                                 Em
Have you no idea that you're in deep?
                           Em
I dreamt about you nearly every night this week
          C             Am
How many secrets can you keep?
                                    Em
Cause there's this tune I found that makes me think of you somehow
      Em
And I play it on repeat
C         Am
 Until I fall asleep
                       B
Spilling drinks on my settee
 
 
[Pre-Chorus]
 
      C
Do I wanna know
         Am
if this feeling flows both ways?
        Em
Sad to see you go
          Em
Was sorta hoping that you'd stay
      C
Baby we both know
          Am
That the nights were mainly made
             Em                               Em
for saying things that you can't say tomorrow day
 
 
[Chorus]
 
                  Em
Crawlin' back to you
                C       Am
Ever thought of calling when you've had a few
             Em
Cos I always do
          Em             C         Am
Maybe I'm too busy being yours to fall for somebody new
                     Em
Now I've thought it through
                  Em
Crawlin' back to you
 
 
[Verse]
 
                    C    Am
So have you got the guts?
                                    Em
Been wondering if your hearts still open
                   Em
And if so I wanna know what time it shuts
C              Am
 Simmer down and pucker up
 
I'm sorry to interrupt
     Em
It's just I'm constantly on the cusp
             C        Am
Of trying to kiss you
                              Em
I don't know if you feel the same as I do
               C        Am
But we could be together
              B
if you wanted to
 
 
[Pre-Chorus]
 
      C
Do I wanna know
         Am
if this feeling flows both ways?
        Em
Sad to see you go
          Em
Was sorta hoping that you'd stay
      C
Baby we both know
          Am
That the nights were mainly made
             Em                               Em
for saying things that you can't say tomorrow day
 
 
[Chorus]
 
                  Em
Crawlin' back to you
                C       Am
Ever thought of calling when you've had a few
             Em
Cos I always do
          Em             C         Am
Maybe I'm too busy being yours to fall for somebody new
                     Em
Now I've thought it through
                  Em
Crawlin' back to you
 
 
[Pre-Chorus]
 
      C
Do I wanna know
         Am
if this feeling flows both ways?
        Em
Sad to see you go
          Em
Was sorta hoping that you'd stay
      C
Baby we both know
          Am
That the nights were mainly made
             Em                               Em
for saying things that you can't say tomorrow day
 
      C
Do I wanna know
                Am
Too busy being yours to fall
        Em
Sad to see you go
                 D
Ever thought of calling darling?
      C
Do I wanna know
                Am             Em
Do you want me crawling back to you?
X""",
        artist_id=newArtist.id,
        author_id=1,
        song_name="Do I Wanna Know Acoustic",
        key="Gm",
        version=1,
        genre_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    songs_list.append(do_i_wanna_know_acoustic)
    
    newArtist = Artist(
        name="Bob Dylan",
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(newArtist)
    db.session.commit()
    
    blowin_in_the_wind = Songsheet(
        title="Blowin In The Wind",
        body="""\nCapo 7 for this version in D - https://www.youtube.com/watch?v=MMFj8uDubsE
 
 
[Verse]
G        C            D        G
How many roads must a man walk down,
           C          G
before you call him a man
G        C           D          G
How many seas must a white dove sail,
           C             D
before she sleeps in the sand
         G        C              D           G
Yes, and how many times must the cannonballs fly,
               C       G
before they're forever banned
 
[Chorus]
C            D        G                C
The answer my friend is blowin' in the wind
              D              G
The answer is blowin' in the wind
 
[Harmonica Refrain]
| C  D  | G  C  | C  D  | G     |
 
[Verse]
         G        C           D         G
Yes, and how many years can a mountain exist,
             C             G
before it is washed to the sea
         G        C              D      G
Yes, and how many years can some people exist,
               C             D
before they're allowed to be free
         G        C           D            G
Yes, and how many times can a man turn his head,
                     C           G
and pretend that he just doesn't see
 
[Chorus]
C            D        G                C
The answer my friend is blowin' in the wind
              D              G
The answer is blowin' in the wind
 
[Harmonica Refrain]
| C  D  | G  C  | C  D  | G     |
 
[Verse]
         G        C            D        G
Yes, and how many times must a man look up,
              C       G
before he can see the sky
         G        C         D       G
Yes, and how many ears must one man have,
              C           D
before he can hear people cry
         G        C              D            G
Yes, and how many deaths will it take till he knows,
              C           G
that too many people have died
 
[Chorus]
C            D          G              C
The answer my friend is blowin' in the wind
              D              G
The answer is blowin' in the wind
 
[Harmonica Outro]
| C  D  | G  C  | C  D  | G     |
X""",
        artist_id=newArtist.id,
        author_id=1,
        song_name="Blowin In The Wind",
        key="D",
        version=1,
        genre_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    songs_list.append(blowin_in_the_wind)
    

    db.session.add_all(songs_list)
    db.session.commit()


def undo_songsheets_selenium():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.songsheets RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM songsheets"))

    db.session.commit()
