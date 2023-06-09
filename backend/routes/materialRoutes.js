const express = require("express");
const {
  registerMaterial,
  allMaterials,
  countMaterials,
  idMaterial,
} = require("../controllers/materialController");
const Material = require("../models/materialModel");
const csvtojson = require("csvtojson");
const router = express.Router();

router.route("/").get(allMaterials);
router.route("/").post(registerMaterial);
router.route("/list").post(registerMaterial);
router.route("/id").get(idMaterial);

// csv register
router.post("/add", async (req, res) => {
  csvtojson()
    .fromFile("backend/H.csv")
    .then((csvData) => {
      console.log(csvData);
      Material.insertMany(csvData)
        .then(function () {
          console.log("data inserted");
          res.json({ success: "success" });
        })
        .catch(function (error) {
          console.log(error);
        });
    });
});

router.route("/count").get(countMaterials);
module.exports = router;
