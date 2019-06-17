const express = require("express");
const router = express.Router();

router.get("/text_categories", (req, res, next) => {
  const categories = [
    "abortion",
    "Brexit",
    "Britain 🇬🇧",
    "Theresa May",
    "pineapple pizza 🍍🍕"
  ];
  res.json({ data: categories });
});

module.exports = router;
