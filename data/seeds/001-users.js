
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'Lorenzo', last_name: 'Simpson', username: 'lorenzo_simpson', password: 'password'},
        {first_name: 'Thomas', last_name: 'Simpson', username: 'thomas_simpson', password: 'password'},
      ]);
    });
};
