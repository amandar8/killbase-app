'use strict'

const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

app.disable('x-powered-by');

app.use(bodyParser.json());

app.use(express.static(path.join('public'));

app.get('/assassins', function(req, res) {
  knex('assassins').then(function(result) {
    res.send(result);
  })
});

app.get('/contracts', function(req, res){
  knex('/contracts')
  .join
})

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});

module.exports = app;
