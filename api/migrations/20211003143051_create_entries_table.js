exports.up = function (knex) {
  return knex.schema.createTable("entries", function (t) {
    t.increments("id").primary;
    t.string("visitor").notNullable();
    t.string("title");
    t.string("text");
    t.timestamp("created").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("entries");
};
