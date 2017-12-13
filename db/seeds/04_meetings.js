exports.seed = function(knex, Promise) {
  return knex('meetings').del()
    .then(function () {
      return knex('meetings').insert([
        {user_id: 1, contact_id: 1, date: '12/8/06', type: 'phone', notes: "Met to discuss Scranton Start Up Week"},
        {user_id: 1, contact_id: 2, date: '12/12/06', type: 'in-person', notes: "Discussed new ways to co-manage"},
        {user_id: 1, contact_id: 3, date: '1/8/07', type: 'in-person', notes: "Discussed logo collaboration for my new Movie, Threat Level Midnight"}
      ]);
    });
};
