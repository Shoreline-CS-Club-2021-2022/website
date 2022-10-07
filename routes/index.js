const express = require("express");
const router = express.Router();
const home_controller = require("../controllers/homeController.js")

router.get("/", home_controller.index_page);


module.exports = router;