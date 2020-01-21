const knex = require('knex');

const knexConfigration = require('../knexfile').development;

module.exports = knex(knexConfigration);