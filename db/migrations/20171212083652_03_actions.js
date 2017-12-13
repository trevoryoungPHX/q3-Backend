exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(table) {
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
    table.string("title");
    table.string("due_date");
    table.boolean("is_completed");
    table.timestamps(true,true);
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('actions');
};
