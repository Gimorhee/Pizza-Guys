
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('orders', function(table){
      table.increments('id');
      table.string('phone_number');
      table.timestamp('ready_time');
      table.boolean('order_ready');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('orders')
    ])
};
