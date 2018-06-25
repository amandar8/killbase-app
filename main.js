'use strict';

const env = 'development'; //env = environment
const config = require('./knexfile.js')[env]; //require knex [env] requests the property named developement info from knexfile.js
const knex = require('knex')(config); //requires the knex library, passes in the config

const assassins = {
  Full_Name: '',
  Code_Name: '',
  Rating: ,
  Price: ,
  Age: ,
  Weapon: ,
  Contact_Info: ,
}

knex('assassins')
.insert({
  Full_Name: 'Alexander Duggan',
  Code_Name: 'The Jackal',
  Rating: 7.5,
  Price: '$45',
  Age: 33,
  Weapon: 'Sniper Rifle',
  Contact_Info: 'jackal@gmail.com',
})
