const connection = require("./connection");

function getTweets(testDb) {
  const db = testDb || connection;

  return db("tweets")
    .join("users", "tweets.user_id", "users.id")
    .select("*", "tweets.id AS tweets_id")
    .then(tweets => {
      return tweets.map(tweet => {
        delete tweet.user_id;
        tweet.user = {
          id: tweet.id,
          username: tweet.username
        };
        delete tweet.username;
        delete tweet.user_id;
        return tweet;
      });
    });
}

function createTweet(tweet, testDb) {
  const db = testDb || connection;

  return db("tweets").insert(tweet);
}

function getTweetsByUserName(username, testDb) {
  const db = testDb || connection;
  return db("users")
    .where("username", username)
    .first()
    .then(user => {
      return db("tweets")
        .where("user_id", user.id)
        .then(tweets => {
          return tweets.map(tweet => {
            delete tweet.user_id;
            tweet.user = {
              id: tweet.id,
              username: user.username
            };
            delete tweet.user_id;

            return tweet;
          });
        });
    });
}

module.exports = {
  getTweets,
  createTweet,
  getTweetsByUserName
};
