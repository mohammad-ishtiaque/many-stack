const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// const routes = require('./routes');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// app.use('/api', routes);
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Export the app for testing purposes
module.exports = app;