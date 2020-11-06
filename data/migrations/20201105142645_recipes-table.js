
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
      tbl.increments()
      tbl.string('recipe_name', 128).notNullable()
  })
  .createTable('ingredients', tbl => {
    tbl.increments()
    tbl.string('ingredient_name', 128).notNullable()
  })
  .createTable('steps', tbl => {
    tbl.increments()
    tbl.integer('step_order', 128).notNullable()
    tbl.string('instruction', 128).notNullable()
    tbl.integer('recipe_id', 128)
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('recipes')
    .onDelete('CASCADE') // 'RESTRICT'
    .onUpdate('CASCADE')
  })
  .createTable('ingredient_steps', tbl => {
    tbl.increments()
    tbl.integer('recipe_id', 128).notNullable()
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('recipes')
    .onDelete('CASCADE') // 'RESTRICT'
    .onUpdate('CASCADE')

    tbl.integer('ingredient_id', 128).notNullable()
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('ingredients')
    .onDelete('CASCADE') // 'RESTRICT'
    .onUpdate('CASCADE')

    tbl.integer('quantity', 128).notNullable().unsigned()

  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('ingredient_steps')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
