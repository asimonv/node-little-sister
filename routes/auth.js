const express = require("express");
const router = express.Router();
const passport = require("passport");

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

module.exports = router;
