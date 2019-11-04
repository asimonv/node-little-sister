const express = require("express");
const router = express.Router();

router.get("/credentials", (req, res, next) => {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirectURI = process.env.SPOTIFY_REDIRECT_URI;
  const spotifyCredentials = { clientId, clientSecret, redirectURI };
  res.json(spotifyCredentials);
});

router.get("/callback", (req, res, next) => {
  const { code } = req.query;
  res.redirect(`littlesister://results?spotify_auth_code=${code}`);
});

module.exports = router;
