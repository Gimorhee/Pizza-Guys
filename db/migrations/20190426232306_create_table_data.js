
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('data', function(table){
      table.increments('id');
      table.string('pizza_name');
      table.string('size');
      table.integer('qty');
      table.integer('price');
      table.integer('total_price');
      table.string('phone_number');
      table.integer('ready_time');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('data')
  ])
};
