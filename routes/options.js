const express = require("express");
const router = express.Router();

router.get("/text_categories", (req, res, next) => {
  const categories = [
    "abortion",
    "Brexit",
    "Britain 🇬🇧",
    "Theresa May",
    "pineapple pizza 🍍🍕",
    "human sadness",
    "David Bowie 👩‍🎤",
    "rainy days",
    "Rafael Nadal",
    "Roger Federer",
    "Manchester United 🔴",
    "Chelsea 🔵",
    "Arsenal 🔴⚪️",
    "Liverpool 🔴"
  ];
  res.json({ data: categories });
});

module.exports = router;
