'use strict';

// const config = require('../knexfile.js')['production'];
const express = require('express');
const router = express.Router();
const knex = require('../knex');


router.get('/contracts', (req, res, next) => {
    knex('contracts')
        .orderBy('id')
        .then((contracts) => {
            res.send(contracts);
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/contracts/:id', (req, res, next) => {
    knex('contracts')
        .where('id', req.params.id)
        .first()
        .then((contracts) => {
            if (!contracts) {
                return next();
            }
            res.send(contracts);
        })
        .catch((err) => {
            next(err);
        });
});

router.post('/contracts', (req, res, next) => {
    knex('contracts')
        .insert({
            target_id: require.body.target_id,
            client_id: req.body.client_id,
            budget: req.body.budget,
            complete: req.body.complete,
            completed_by_id: req.body.completed_by_id
        }, '*')
        .then((contracts) => {
            res.send(contracts[0]);
        })
        .catch((err) => {
            next(err);
        });
});

router.patch('/contracts/:id', (req, res, next) => {
    knex('contracts')
        .where('id', req.params.id)
        .first()
        .then((contract) => {
            if (!contract) {
                return next();
            }

            return knex('contracts')
                .update({
                  target_id: require.body.target_id,
                  client_id: req.body.client_id,
                  budget: req.body.budget,
                  complete: req.body.complete,
                  completed_by_id: req.body.completed_by_id
                }, '*')
                .where('id', req.params.id);
        })
        .then((contracts) => {
            res.send(contracts[0]);
        })
        .catch((err) => {
            next(err);
        });
});

router.delete('/contracts/:id', (req, res, next) => {
    let contract;

    knex('contracts')
        .where('id', req.params.id)
        .first()
        .then((row) => {
            if (!row) {
                return next();
            }

            contract = row;

            return knex('contracts')
                .del()
                .where('id', req.params.id);
        })
        .then(() => {
            delete contract.id;
            res.send(contract);
        })
        .catch((err) => {
            next(err);
        });
});

module.exports = router;
