
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '1234565', make: 'Tesla', model: 'model 3', mileage: '1234565'}
      ]);
    });
};
