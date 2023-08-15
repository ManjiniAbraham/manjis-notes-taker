// Import the 'express' package to create an instance of an Express application
const express = require('express');

// Import our router for /notes
const notesRouter = require('./notes.js');

// Create an instance of the Express application
const api = express();
api.use('/notes', notesRouter);

// Export the 'api' instance
module.exports = api;