# Jamify (Flask React Project)

## About

Hello, thanks for checking out my capstone project! This project is a clone of Ultimateguitar.com and uses Python, Flask and SQLAlchemy for the backend structure. The front end was created using JavaScript, React, Redux and vanilla CSS to style the site.

Currently the app has functionality to authenticate users, create and edit Songsheets, create and edit lists of Songsheets, create and delete audio files called demos. I included a piano keyboard so users can play along to a songsheet.

## Frontend Screenshots

The search bar dynamically renders results matching the user input, giving suggestions for a Songsheets based off the title.
![Landing Page](https://i.imgur.com/GVtcJI2.png)
To upload a songsheet a user must input The Artist, Album, Genre, Title, key, and body. They can also update it using the same interface.
![Create Songsheet](https://i.imgur.com/h1kCy17.png)
Users can upload audio files with the correct extensions. There is also s demo button if they do not have a file to upload.
![Upload Demo](https://i.imgur.com/yigxfGX.png)
This page displays the details of the Songsheet and can add current Songsheet to a Setlist
![Songsheet Detail](https://i.imgur.com/Orp5sSc.png)
Users organize desired Songsheets into a setlist
![Setlist Detail](https://i.imgur.com/PS3qwh6.png)

This site is currently live here: https://jamify-dhs9.onrender.com. You can also clone the repo and run locally by following the instructions below.

## Getting started
1. Clone this repository (only this branch)

2. Install dependencies

      ```bash
      pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Make sure the SQLite3 database connection URL is in the **.env** file

5. This starter organizes all tables inside the `flask_schema` schema, defined
   by the `SCHEMA` environment variable.  Replace the value for
   `SCHEMA` with a unique name, **making sure you use the snake_case
   convention**.

6. Get into your pipenv, migrate your database, seed your database, and run your Flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

7. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.
