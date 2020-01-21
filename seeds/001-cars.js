
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 'JTKKU4B41C1023346', make: 'Toyota', model: 'Carmry', mileage: 35000, transmission: 'auto', title: 'clean'},
        {VIN: '1FMCU24X4NUD21099', make: 'Honda', model: 'Civic', mileage: 15000, transmission: 'auto', title: 'unknown'},
        {VIN: 'JH4DA3469HS019532', make: 'BMW', model: '550', mileage: 55000, transmission: 'manual', title: 'clean'}
      ]);
    });
};
