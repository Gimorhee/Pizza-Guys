
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('order_line_items', function(table){
      table.increments('id');
      table.integer('order_id').unsigned()
      table.foreign('order_id').references('orders.id');
      table.integer('menu_items_id').unsigned()
      table.foreign('menu_items_id').references('menu_items.id');
      table.integer('qty');
      table.integer('price');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('order_line_items')
    ])
};


