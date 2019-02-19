exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("tweets")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tweets").insert([
        {
          id: 1,
          text: "Hi I am bob",
          tweeted_at: "1550544707104",
          user_id: "1"
        },
        {
          id: 2,
          text: "Hi I am alice",
          tweeted_at: "1550544711937",
          user_id: "2"
        },
        {
          id: 3,
          text: "Hi I am eve",
          tweeted_at: "1550544719361",
          user_id: "3"
        }
      ]);
    });
};
