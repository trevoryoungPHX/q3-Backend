exports.seed = function(knex, Promise) {
  return knex('actions').del()
    .then(function () {
      return knex('actions').insert([
        {contact_id: 1, title: 'Send letter of Rec', due_date: "12/20/17", is_completed: false},
        {contact_id: 1, title: 'Send link to magazine', due_date: "12/20/17", is_completed: true},
        {contact_id: 2, title: 'Meet to discuss Co Manager options', due_date: "12/20/17", is_completed: false},
        {contact_id: 3, title: 'Get new chair', due_date: "12/20/17", is_completed: true},
        {contact_id: 3, title: 'Send link to DM Design Program', due_date: "12/20/17", is_completed: false},
        {contact_id: 2, title: 'Send notes', due_date: "12/20/17", is_completed: true}
      ]);
    });
};
