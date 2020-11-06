exports.seed = function(knex) {
  return knex('recipes').insert([   
    { recipe_name: 'Hot Chocolate'},
    { recipe_name: 'Cereal Bowl'},
    { recipe_name: 'Fruity Smoothie'},
  ]);
};
