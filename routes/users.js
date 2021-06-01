var express = require("express");
var router = express.Router();

const fs = require("fs");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/opinions", () => {
  fs.readFile("../data/opinions.csv", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
});

module.exports = router;
