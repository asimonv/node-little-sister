var express = require("express");
const csv = require("csvtojson");
var router = express.Router();

const fs = require("fs");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/opinions", async (req, res, next) => {
  const csvFilePath = `${process.cwd()}/public/opinions.csv`;
  const jsonArray = await csv().fromFile(csvFilePath);
  res.json(jsonArray);
});

router.post("/opinions", async (req, res, next) => {
  const { body } = req;
  console.log(body);
});

module.exports = router;
