const db = require('../db-config');
module.exports = {
    find,
    findById,
    findByUserId,
    insert,
    update,
    remove,
}

function find() {
    return db('trips');
}

function findById(id) {
    return db('trips').where({ id }).first();
}

function findByUserId(user_id) {
    return db('trips').where({ user_id })
}

function insert() {
    
}

function update() {
    
}

function remove() {
    
}