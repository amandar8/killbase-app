'use strict'

const fs = require('fs');
const path = require('path');
const knexPath = path.join(__dirname, 'knexfile.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const env = 'development';
const config = require(knexPath)[env];
const knex = require('knex')(config);
const morgan = require('morgan');
let cookieParser = require('cookie-parser');

let assassins = require('./routes/assassinroutes.js');
let codeNames = require('./routes/codenamesroutes.js');
let targets = require('./routes/targetroutes.js');
let clients = require('./routes/clientroutes.js')
let contracts= require('./routes/contractroutes.js');
let assassinContracts = require('./routes/assassincontractroutes.js')

app.set('view engine', 'ejs');

app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(morgan('short'));

app.use(express.static(path.join('public')));

app.use(assassins);
app.use(codeNames);
app.use(targets);
app.use(clients);
app.use(contracts);
app.use(assassinContracts);

app.use(function(req, res) {
  res.sendStatus(404);
});

app.use(function(err, req, res, next) {
  if (err.status) {
    return res
      .status(err.status)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  console.error(err.stack);
  res.sendStatus(500);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});

module.exports = app;
