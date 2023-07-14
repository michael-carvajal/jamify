# Jamify (Flask React Project)

## About

Hello, thanks for checking out my capstone project! This project is a clone of Ultimateguitar.com and uses Python, Flask and SQLAlchemy for the backend structure. The front end was created using JavaScript, React, Redux and vanilla CSS to style the site.

Currently the app has functionality to authenticate users, create and edit Songsheets, create and edit lists of Songsheets, create and delete audio files called demos. I included a piano keyboard so users can play along to a songsheet.

## Index

[MVP Feature List](https://github.com/michael-carvajal/jamify/wiki/Feature-List) |
[Database Scheme](https://github.com/michael-carvajal/jamify/wiki/Database-Schema) |
[User Stories](https://github.com/michael-carvajal/jamify/wiki/User-Stories) |
[Wire Frames](https://github.com/michael-carvajal/jamify/wiki/Wireframes) |

## Technologies Used

<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /><img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" /><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /><img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" /><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /><img src='https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54'/><img src='https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white'/>



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
