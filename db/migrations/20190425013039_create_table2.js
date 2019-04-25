
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('sizes', function(table){
      table.increments('id');
      table.string('type');
      table.integer('price');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('sizes')
    ])
};




