
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {trip_name: 'Spring Break', country: 'United States', location: 'Nashville, TN', trip_desc: 'Nashville for Spring Break. It was fun', user_id: 1},
        {trip_name: 'Summer Break', country: 'Portugal', location: 'Lisbon', trip_desc: 'Lisbon for the summer. It was ok.', user_id: 1},
        {trip_name: 'Summer Break', country: 'Portugal', location: 'Lisbon', trip_desc: 'Lisbon for the summer. It was ok.', user_id: 2},
        {trip_name: 'Superbowl Trip', country: 'United States', location: 'Dallas, TX', trip_desc: 'Dallas for the Superbowl. It was fun', user_id: 2},
      ]);
    });
};
