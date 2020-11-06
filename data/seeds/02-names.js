
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('names').insert([
        {bob_names: 'Zac'},
        {bob_names: 'Tom'},
        {bob_names: 'Melissa'}
      ]);   
};
