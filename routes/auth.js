require("dotenv").config();

const express = require("express");
const router = express.Router();
const passport = require("passport");
const axios = require("axios");

router.get("/twitter", (req, res, next) => {
  passport.authenticate("twitter", (err, user, info) => {
    console.log(err, user, info);
  })(req, res, next);
});

router.get("/twitter/callback", (req, res, next) => {
  passport.authenticate("twitter", (err, user, info) => {
    console.log(user);
    const { id } = user;
    res.redirect(`littlesister://home?user=${id}`);
  })(req, res, next);
});

router.post("/cambridge", async (req, res, next) => {
  try {
    // this parse may fail
    const body = {
      customer_id: parseInt(process.env.CAMBRIDGE_CUSTOMER_ID, 10),
      api_key: process.env.CAMBRIDGE_API_KEY
    };

    console.log(body);

    const headers = {
      "Content-type": "application/json",
      Accept: "application/json"
    };

    const cambridgeRes = await axios.post(
      process.env.CAMBRIDGE_API_ENDPOINT,
      body,
      { headers }
    );
    return res.json(cambridgeRes.response.data);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
