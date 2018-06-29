'use strict';

// const config = require('../knexfile.js')['production'];
const knex = require('../knex');
const express = require('express');
const router = express.Router();


router.get('/targets', (req, res, next) => {
    knex('targets')
        .orderBy('id')
        .then((targets) => {
            res.send(targets);
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/targets/:id', (req, res, next) => {
    knex('targets')
        .where('id', req.params.id)
        .first()
        .then((target) => {
            if (!target) {
                return next();
            }
            res.send(target);
        })
        .catch((err) => {
            next(err);
        });
});

router.post('/targets', (req, res, next) => {
    knex('targets')
        .insert({
            name: req.body.name,
            location: req.body.location,
            photo: req.body.photo,
            security: req.body.security
        }, '*')
        .then((targets) => {
            res.send(targets[0]);
        })
        .catch((err) => {
            next(err);
        });
});

router.patch('/targets/:id', (req, res, next) => {
    knex('targets')
        .where('id', req.params.id)
        .first()
        .then((target) => {
            if (!target) {
                return next();
            }

            return knex('targets')
                .update({
                  name: req.body.name,
                  location: req.body.location,
                  photo: req.body.photo,
                  security: req.body.security,
                }, '*')
                .where('id', req.params.id);
        })
        .then((targets) => {
            res.send(targets[0]);
        })
        .catch((err) => {
            next(err);
        });
});

router.delete('/targets/:id', (req, res, next) => {
    let target;

    knex('targets')
        .where('id', req.params.id)
        .first()
        .then((row) => {
            if (!row) {
                return next();
            }

            target = row;

            return knex('targets')
                .del()
                .where('id', req.params.id);
        })
        .then(() => {
            delete targets.id;
            res.send(targets);
        })
        .catch((err) => {
            next(err);
        });
});

module.exports = router;
