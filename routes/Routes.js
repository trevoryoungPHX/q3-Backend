var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
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


module.exports = router;
