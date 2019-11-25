
exports.up = function(knex) {
  return knex.schema
  .createTable('trips', tbl => {
      tbl.increments()
      tbl.string('trip_name')
      tbl.string('country')
        .notNullable()
      tbl.string('location')
      tbl.string('trip_desc')
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  }) 
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('trips')
};
