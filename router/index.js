var express = require("express");
const { HomeController } = require("../controllers/homeController");
var router = express.Router();

router.get("/", HomeController);

module.exports = router;
