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

router.delete('/contacts/delete/:id', function(req, res) {
  knex('contacts').del().where('id', req.params.id).then(function() {
    knex('contacts').select().then(contacts => res.json(contacts))
  });
});

/* ACTIONS */

router.get('/actions/:id', function(req, res, next) {
  knex('actions').select("actions.*", "contacts.first_name", "contacts.last_name", "contacts.profession", "contacts.company", "contacts.email", "contacts.phone", "contacts.photo_url").join("contacts","actions.contact_id", "contacts.id").where("actions.user_id", req.params.id).then(actions => res.json(actions))
});

router.post('/actions', function(req, res) {
  knex('actions').insert(req.body).then(() => {
    knex('actions').select().join("contacts","actions.contact_id", "contacts.id").then(actions => res.json(actions))
  });
});

router.patch('/actions/update/:id', function(req, res){
  console.log(req.params.id)
  knex('actions').update('is_completed', true).where('id', req.params.id).then(()=>{
    knex('actions').select().join("contacts","actions.contact_id", "contacts.id").then(actions => res.json(actions))
  })
})


/* MEETINGS */

router.get('/meetings/:id', function(req, res, next) {
  knex('meetings').select().where("user_id", req.params.id).then(meetings => res.json(meetings))
});

router.post('/meetings', function(req, res) {
  knex('meetings').insert(req.body).then(() => {
    knex('meetings').select().then(meetings => res.json(meetings))
  });
});

/* NOTES */

router.get('/notes/:id', function(req, res, next) {
  knex('notes').select().where("user_id", req.params.id).then(notes => res.json(notes))
});

router.post('/notes', function(req, res) {
  knex('notes').insert(req.body).then(() => {
    knex('notes').select().then(notes => res.json(notes))
  });
});

module.exports = router;
