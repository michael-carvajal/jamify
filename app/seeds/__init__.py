from flask.cli import AppGroup
from .users import seed_users, undo_users
from .artists import seed_artists, undo_artists
from .albums import seed_albums, undo_albums
from .songsheets import seed_songsheets, undo_songsheets
from .setlists import seed_setlists, undo_setlists
from .setlist_items import seed_setlist_items, undo_setlist_items
from .genres import seed_genres, undo_genres
from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_setlist_items()
        undo_setlists()
        undo_songsheets()
        undo_genres()
        undo_albums()
        undo_users()
        undo_artists()
    seed_artists()
    seed_users()
    seed_albums()
    seed_genres()
    seed_songsheets()
    seed_setlists()
    seed_setlist_items()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_setlist_items()
    undo_setlists()
    undo_songsheets()
    undo_genres()
    undo_albums()
    undo_users()
    undo_artists()

    # Add other undo functions here
