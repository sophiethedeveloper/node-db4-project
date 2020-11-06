const db = require("../data/connection.js")

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(id) {
    /*SELECT
        i.ingredient_name,
        [is].quantity,
        [is].recipe_id
    FROM ingredients as i
    JOIN ingredient_steps as [is]
    ON i.id = [is].ingredient_id
    WHERE [is].recipe_id = 3*/

    return db('ingredients as i')
    .join('ingredient_steps as [is]', 'i.id', '[is].ingredient_id')
    .select('i.ingredient_name', '[is].quantity', '[is].recipe_id')
    .where({'[is].recipe_id': id})
}

function getInstructions(id) {
    //     select
    //     s.step_order,
    //     s.instruction
    // FROM steps as s
    // WHERE s.recipe_id = 3;

    return db('steps as s')
    .select('s.step_order', 's.instruction')
    .where({'s.recipe_id': id})
}