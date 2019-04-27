
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('data').del();
    // .then(function () {
    //   return Promise.all([
    //     // Inserts seed entries
    //   //   knex('data').insert({pizza_name:'cheese', size: 'small', qty: 2, total_price: 10, phone_number: '+1237859947', ready_time: 0})
    //   // ]);
    // });
};
