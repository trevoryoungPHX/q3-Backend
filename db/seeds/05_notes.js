exports.seed = function(knex, Promise) {
  return knex('notes').del()
    .then(function () {
      return knex('notes').insert([
        {contact_id: 1, description: 'Idiot'},
        {contact_id: 1, description: 'Great asistant to the regional manager'},
        {contact_id: 2, description: 'Goal: Get him to come over to dinner'},
        {contact_id: 3, description: 'I owe her my old chair.'},
        {contact_id: 3, description: 'Loves to paint'}
      ]);
    });
};
