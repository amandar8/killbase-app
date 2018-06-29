'use strict';

// const config = require('../knexfile.js')['production'];
const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/assassin_contracts', (req, res, next) => {
    knex('assassin_contracts')
        .orderBy('assassin_id')
        .then((assassin_contracts) => {
            res.send(assassin_contracts);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

router.get('/assassin_contracts/:id', (req, res, next) => {
    knex('assassin_contracts')
        .where('id', req.params.id)
        .first()
        .then((assassin_contracts) => {
            if (!assassin_contracts) {
                return next();
            }
            res.send(assassin_contracts);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

router.post('/assassin_contracts', (req, res, next) => {
    knex('assassin_contracts')
        .insert({
            assassin_id: req.body.assassin_id,
            contract_id: req.body.contract_id
        }, '*')
        .then((assassin_contracts) => {
            res.send(assassin_contracts[0]);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

router.patch('/assassin_contracts/:id', (req, res, next) => {
    knex('assassin_contracts')
        .where('id', req.params.id)
        .first()
        .then((assassin_contract) => {
            if (!assassin_contract) {
                return next();
            }

            return knex('assassin_contracts')
                .update({
                    assassin_id: req.body.assassin_id,
                    contract_id: req.body.contract_id
                }, '*')
                .where('id', req.params.id);
        })
        .then((assassin_contracts) => {
            res.send(assassin_contracts[0]);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

router.delete('/assassin_contracts/:id', (req, res, next) => {
    let assassin_contract;

    knex('assassin_contracts')
        .where('id', req.params.id)
        .first()
        .then((row) => {
            if (!row) {
                return next();
            }

            assassin_contract = row;

            return knex('assassin_contracts')
                .del()
                .where('id', req.params.id);
        })
        .then(() => {
            delete assassin_contract.id;
            res.send(assassin_contract);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

module.exports = router;
