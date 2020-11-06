
exports.up = function(knex) {
  return knex.schema
    .createTable('names', tbl => {
        tbl.increments()
        tbl.string('bob_names', 128).notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('names')
};
