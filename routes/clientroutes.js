'use strict';

const knex = require('../knex');
const express = require('express');
const router = express.Router();


router.get('/clients', (req, res, next) => {
    knex('clients')
        .orderBy('id')
        .then((clients) => {
            // res.render('clients', {data:clients});
            res.send(clients);
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/clients/:id', (req, res, next) => {
    knex('clients')
        .where('id', req.params.id)
        .first()
        .then((client) => {
            if (!client) {
                return next();
            }
            res.send(client);
        })
        .catch((err) => {
            next(err);
        });
});

router.post('/clients', (req, res, next) => {
    knex('clients')
        .insert({
            name: req.body.name
        }, '*')
        .then((clients) => {
            res.send(clients[0]);
        })
        .catch((err) => {
            next(err);
        });
});

router.patch('/clients/:id', (req, res, next) => {
    knex('clients')
        .where('id', req.params.id)
        .first()
        .then((client) => {
            if (!client) {
                return next();
            }

            return knex('clients')
                .update({
                    name: req.body.name
                }, '*')
                .where('id', req.params.id);
        })
        .then((clients) => {
            res.send(clients[0]);
        })
        .catch((err) => {
            next(err);
        });
});

router.delete('/clients/:id', (req, res, next) => {
    let client;

    knex('clients')
        .where('id', req.params.id)
        .first()
        .then((row) => {
            if (!row) {
                return next();
            }

            client = row;

            return knex('clients')
                .del()
                .where('id', req.params.id);
        })
        .then(() => {
            delete client.id;
            res.send(client);
        })
        .catch((err) => {
            next(err);
        });
});

module.exports = router;
