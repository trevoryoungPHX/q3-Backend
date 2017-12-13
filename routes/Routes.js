var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* CONTACTS */
router.get('/contacts', function(req, res, next) {
  knex('contacts').select().then(contacts => res.json(contacts))
});

router.get('/contacts/:id', function(req, res) {
  knex('contacts').select().where('id', req.params.id).then(contacts => res.json(contacts))
});

router.post('/contacts', function(req, res) {
  knex('contacts').insert(req.body).then(() => {
    knex('contacts').select().then(contacts => res.json(contacts))
  });
});

router.patch('/contacts/:id', function(req, res) {
  knex('contacts').update(req.body).where('id', req.params.id).then(function() {
    knex('contacts').select().then(contacts => res.json(contacts))
  });
});

router.delete('/contacts/:id', function(req, res) {
  knex('contacts').del().where('id', req.params.id).then(function() {
    knex('contacts').select().then(contacts => res.json(contacts))
  });
});

/* ACTIONS */

router.get('/actions/:id', function(req, res, next) {
  knex('actions').select().where("user_id", req.params.id).then(actions => res.json(actions))
});


/* MEETINGS */

router.get('/meetings/:id', function(req, res, next) {
  knex('meetings').select().where("user_id", req.params.id).then(meetings => res.json(meetings))
});

/* NOTES */

router.get('/notes/:id', function(req, res, next) {
  knex('notes').select().where("user_id", req.params.id).then(notes => res.json(notes))
});

module.exports = router;
