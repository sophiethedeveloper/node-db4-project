exports.seed = function(knex) {
  return knex('ingredient_steps').insert([   
    { recipe_id: 1, ingredient_id: 1, quantity: 0.5 },
    { recipe_id: 1, ingredient_id: 2, quantity: 0.05 },
    { recipe_id: 2, ingredient_id: 1, quantity: 0.5 },
    { recipe_id: 2, ingredient_id: 3, quantity: 0.7 },
    { recipe_id: 3, ingredient_id: 5, quantity: 1 },
    { recipe_id: 3, ingredient_id: 4, quantity: 5 },
    { recipe_id: 3, ingredient_id: 1, quantity: 0.5 },
    { recipe_id: 3, ingredient_id: 6, quantity: 0.05 },
  ]);
};
