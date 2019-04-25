
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('orders', function(table){
      table.integer("restaurant_id");
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('orders')
    ])
};
