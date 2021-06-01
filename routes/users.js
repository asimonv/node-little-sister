var express = require("express");
const csv = require("csvtojson");
var json2csv = require("json2csv");
const fs = require("fs");

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

router.post("/opinions", (req, res, next) => {
  const { body } = req;
  var newLine = "\r\n";
  console.log(body);
  var toCsv = {
    data: [body],
    fields: ["name", "comment"],
    header: false,
  };

  const csvFilePath = `${process.cwd()}/public/opinions.csv`;
  //write the actual data and end with newline

  try {
    var csv = json2csv(toCsv) + newLine;

    console.warn(csv);

    fs.appendFile(csvFilePath, csv, function(err) {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });
  } catch (error) {
    res.json({ error });
  }
});

module.exports = router;
