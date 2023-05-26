const express = require("express");
const {
  registerMaterial,
  allMaterials,
  registerMaterials,
} = require("../controllers/materialController");

const router = express.Router();

router.route("/").get(allMaterials);
router.route("/").post(registerMaterial);
router.route("/list").post(registerMaterial);

module.exports = router;
