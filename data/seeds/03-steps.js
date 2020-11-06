exports.seed = function(knex) {
  return knex('steps').insert([   
    { step_order: 1, instruction: 'mix milk and chocolate sauce', recipe_id: 1 },
    { step_order: 2, instruction: 'heat up', recipe_id: 1 },
    { step_order: 1, instruction: 'add cereal to bowl', recipe_id: 2 },
    { step_order: 2, instruction: 'add milk to cereal', recipe_id: 2 },
    { step_order: 1, instruction: 'add banana to blender', recipe_id: 3 },
    { step_order: 2, instruction: 'add strawberry to blender', recipe_id: 3 },
    { step_order: 3, instruction: 'add milk', recipe_id: 3 },
    { step_order: 4, instruction: 'add sugar', recipe_id: 3 },
    { step_order: 5, instruction: 'blend it!', recipe_id: 3 },
  ]);
};
