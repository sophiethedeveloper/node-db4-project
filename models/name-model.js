const db = require('../data/config')

// create functions for your endpoints

module.exports = {
    /// function names
    findName
}

function findName() {
    return db('names')
}