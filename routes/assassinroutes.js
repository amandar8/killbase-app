const config = require('../knexfile.js')['production'];
const knex = require('knex')(config);
const express = require('express');
const router = express.Router();

// get route to retrieve assassins
router.get('/assassins', function(req, res) {
  knex('assassins')
    .orderBy('id')
    .select('id', 'full_name', 'weapon', 'contact_info', 'age', 'price', 'rating', 'kills')
    .then(function(assassins) {
      console.log(assassins);
      res.send(assassins));
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
