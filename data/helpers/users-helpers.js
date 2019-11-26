const db = require('../db-config');
module.exports = {
    find,
    findById,
    findByUsername,
    insert,
}
function find() {
    return db('users')
}

function findById(id) {
    return db('users').where({ id }).first()
}

function findByUsername(username) {
    return db('users').where({ username }).first();
}

function insert(user) {
    return db('users').insert(user)
}