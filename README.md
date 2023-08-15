# Note Taker
  
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]

## Description

The project is to create an application called Note Taker that can be used to write and save notes.This application will use an Express.js back end and will save and retrieve note data from a JSON file.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)

## Installation

Install NodeJS. Also install 'Express', 'fs', 'uuid' packages. Also have access to Heroku and install Heroku CLI.

## Usage

The app has been deployed on Heroku.

Live URL : https://manjis-note-taker-5885a4f3f8bd.herokuapp.com/

Screenshots from Live site:

![Note Taker Home](/images/Note-Taker.png)

![New Note](/images/New_Note.png)

![Existing Note](/images/Existing_Note.png)

![Adding a New Note](/images/Adding_New_Note.png)



## License

License: [ISC License (ISC)](https://opensource.org/licenses/ISC)

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]


## Credits
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs 

https://www.w3schools.com/nodejs/

https://www.youtube.com/watch?v=SccSCuHhOw0

https://devcenter.heroku.com/articles/heroku-cli#download-and-install

## Features

* The Note Taker has the following features:
	* On opening the application, the user is presented with a landing page with a link to a notes page.
	* On clicking the link to the notes page, user is presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column.
    * On entering a new note title and the note’s text, a Save icon appears in the navigation at the top of the page.
    * On clicking the Save icon, the new note entered is saved and appears in the left-hand column with the other existing notes.
    * Clicking on an existing note in the list in the left-hand column, makes that selected note appear in the right-hand column.
    * Clicking on the '+' icon in the navigation at the top of the page, user is presented with empty fields to enter a new note title and the note’s text in the right-hand column
    * Clicking on Delete icon , will delete the selected note both from the front end and db.json.



