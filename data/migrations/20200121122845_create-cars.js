
exports.up = function(knex) {
    return (knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.string('VIN', 30).notNullable().unique();
        tbl.string('make', 20).notNullable().index();
        tbl.string('model', 20).notNullable().index();
        tbl.integer('mileage');
        tbl.enu('transmission', ['auto', 'manual', 'unknown']);
        tbl.enu('title', ['clean', 'salvage', 'unknown']);
     
    }))
  
};

exports.down = function(knex) {
  return
    knex.schema.dropTableIfExsits('cars');
};
