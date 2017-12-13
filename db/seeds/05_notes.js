exports.seed = function(knex, Promise) {
  return knex('notes').del()
    .then(function () {
      return knex('notes').insert([
        {user_id: 1, contact_id: 1, description: 'Idiot'},
        {user_id: 1, contact_id: 1, description: 'Great asistant to the regional manager'},
        {user_id: 1, contact_id: 2, description: 'Goal: Get him to come over to dinner'},
        {user_id: 1, contact_id: 3, description: 'I owe her my old chair.'},
        {user_id: 1, contact_id: 3, description: 'Loves to paint'}
      ]);
    });
};
