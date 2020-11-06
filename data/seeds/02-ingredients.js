exports.seed = function(knex) {
  return knex('ingredients').insert([   
    { ingredient_name: 'milk'},
    { ingredient_name: 'chocolate sauce'},
    { ingredient_name: 'cereal'},
    { ingredient_name: 'strawberries'},
    { ingredient_name: 'bananas'},
    { ingredient_name: 'sugar'},
  ]);
};
