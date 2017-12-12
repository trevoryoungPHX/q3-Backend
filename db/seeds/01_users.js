exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, first_name: 'Michael', last_name: 'Scott', email: "michael@dm.com", password: "123", photo_url: "http://a.fod4.com/images/user_photos/1203812/357a79e5befe5adefeb1d12050ed95fc_square_fullsize.png"}
      ]);
    });
};
