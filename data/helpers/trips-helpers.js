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

function insert(trip) {
    return db('trips').insert(trip)
}

function update(id, changes) {
    return db('trips').update(changes).where({id})
}

function remove(id) {
    return db('trips').del().where({id})
}