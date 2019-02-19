const express = require("express");
const router = express.Router();
const { getTweets, getTweetsByUserName } = require("../db/tweets");

//GET /api/v1/tweets
router.get("/", (req, res) => {
  getTweets()
    .then(tweets => {
      res.json(tweets);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "something went wrong" });
    });
});

//POST /api/v1/tweets
router.post("/", (resq, res) => {
  res.json([
    {
      id: 6
    }
  ]);
});

//GET /api/v1/tweets/:username
router.get("/:username", (req, res) => {
  getTweetsByUserName(req.params.username)
    .then(tweets => {
      res.json(tweets);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "something went wrong" });
    });
});

module.exports = router;
