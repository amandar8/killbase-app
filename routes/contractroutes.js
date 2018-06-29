const config = require('../knexfile.js')['production'];
const knex = require('knex')(config);
const express = require('express');
const router = express.Router();



// GET route to retreive all contracts
router.get('/', function(req, res) {
  knex('contracts')
    .orderBy('id')
    .select('id', 'targetPhoto', 'targetName', 'clientName', 'targetLocation', 'budget', 'securityLevel')
    .then(function(contracts) {
      res.render('contracts/contractsall.ejs', {contracts});
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});


module.exports = router;
