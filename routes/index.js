const express = require("express");
const router = express.Router();
const home_controller = require("../controllers/HomeController.js")

router.get("/", home_controller.index_page);


module.exports = router;