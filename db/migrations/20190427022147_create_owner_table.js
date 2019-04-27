
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('owner', function(table){
      table.increments('id');
      table.integer('time');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('owner')
  ])
};
