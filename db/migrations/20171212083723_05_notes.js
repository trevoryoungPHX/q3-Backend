exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', function(table) {
    table.increments();
    table.integer("user_id")
      .references('id')
      .inTable("users")
      .onDelete("CASCADE")
      .index();
    table.integer("contact_id")
      .references('id')
      .inTable("contacts")
      .onDelete("CASCADE")
      .index();
    table.text("description");
    table.timestamps(true,true);
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes');
};
