
exports.up = function(knex) {
  return (
    knex.schema
      //makers Table
      .createTable("makers", (table) => {
        table.increments().index();

        table.text("makername");

        table.text("icon");
      })

      //cars Table
      .createTable("cars", (table) => {
        table.increments().index();

        table.text("carname");

        table.integer("length");

        table.integer("height");

        table.integer("width");

        table.integer("price");
        
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
