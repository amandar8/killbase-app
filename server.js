'use strict'

const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const env = 'development';
const config = require(knexPath)[env];
const knex = require('knex')(config);
const knexPath = path.join(__dirname, 'knexfile.js');
const port = process.env.PORT || 8000;
const app = express();

app.disable('x-powered-by');

app.use(bodyParser.json());

app.use(express.static(path.join('public')));

app.get('/assassins', (req, res) => {
  console.log(req);
  knex('assassins').then((x) => {
    res.send(x);
  });
});

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});

module.exports = app;
