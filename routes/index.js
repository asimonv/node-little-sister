require("dotenv").config();

const express = require("express");
const PersonalityInsightsV3 = require("watson-developer-cloud/personality-insights/v3");
const Twit = require("twit");
const router = express.Router();

const T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true // optional - requires SSL certificates to be valid.
});

const personality_insights = new PersonalityInsightsV3({
  iam_apikey: process.env.PERSONALITY_INSIGHTS_APIKEY,
  version: process.env.PERSONALITY_INSIGHTS_VERSION_DATE
});

router.post("/tweets", async (req, res, next) => {
  const { userId } = req.body;
  const tweets = await T.get("statuses/user_timeline", {
    user_id: userId,
    count: 200
  });
  console.log("got tweets");
  res.json(tweets);
});

router.post("/p_insights", (req, res, next) => {
  const { content } = req.body;
  const { contentItems, text } = content;
  const params = {
    content: contentItems ? content : text,
    content_type: contentItems ? "application/json" : "text/plain",
    raw_scores: true,
    consumption_preferences: true
  };

  console.log(contentItems);

  personality_insights
    .profile(params)
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
