const express = require("express");
const {
  getArea,
  saveArea,
  getHome,
} = require("../controllers/area.controller");
const router = express.Router();

router.get("/", getHome);
router.get("/triangle", getArea);
router.post("/triangle", saveArea);

module.exports = router;
