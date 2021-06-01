var express = require("express");
const csv = require("csvtojson");
const csvAppend = require("csv-append");

var router = express.Router();

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
  const csvFilePath = `${process.cwd()}/public/opinions.csv`;
  const { append, end } = csvAppend(csvFilePath);

  try {
    append(body);
    await end();
    res.json(await csv().fromFile(csvFilePath));
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
