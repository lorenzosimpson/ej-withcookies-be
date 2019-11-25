const db = require('../db-config');
module.exports = {
    find,
    findById,
    insert,
}
function find() {
    return db('users')
}

function findById(id) {
    return db('users').where({ id }).first()
}

function insert(user) {
    return db('users').insert(user)
}