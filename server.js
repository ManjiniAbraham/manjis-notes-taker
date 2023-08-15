//Include packages needed for this application
const express = require('express');
const path = require('path');
const api = require('./routes/api.js');

// Define the port on which the server will run
const PORT = process.env.PORT || 3001;


// Create an instance of the Express application
const app = express();

// middleware setup including the router
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route to serve the 'notes.html' file for the Notes page
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
});

/// Default route to serve the 'index.html' file for the homepage or any other request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

// Start the server and listen on the defined port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);