exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', function(table) {
    table.increments();
    table.integer("user_id")
      .references('id')
      .inTable("users")
      .onDelete("CASCADE")
      .index();
    table.string("first_name");
    table.string("last_name");
    table.string("company");
    table.string("profession");
    table.string("email");
    table.string("phone");
    table.string("photo_url");
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts');
};
