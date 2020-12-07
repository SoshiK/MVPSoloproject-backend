
exports.up = function(knex) {
  return (
    knex.schema
      //makers Table
      .createTable("makers", (table) => {
        table.increments().index();

        table.text("name");

        table.text("icon");
      })

      //cars Table
      .createTable("cars", (table) => {
        table.increments().index();

        table.text("name");

        table.float("length");

        table.float("height");

        table.float("width");

        table.integer("maker_id")
          .references("id")
          .inTable("makers");
      })
  )
};

exports.down = function(knex) {
  return knex.schema
      .dropTable("cars")
      .dropTable("makers");
};
