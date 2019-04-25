
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('menu_items', function(table){
      table.increments('id');
      table.string('name');
      table.string('description');
      table.integer('menu_id').unsigned()
      table.foreign('menu_id').references('menu.id');
      table.integer('size_id').unsigned()
      table.foreign('size_id').references('sizes.id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('menu_items')
    ])
};


