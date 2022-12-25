const express = require("express");
const router = express.Router();
const home_controller = require("../controllers/HomeController.js");
const projects_controller = require("../controllers/projectsController");
const announcements_controller = require("../controllers/announcementsController");
const contact_controller = require("../controllers/contactController");

router.get("/", home_controller.index_page);

router.get("/about", home_controller.about_page);

router.get("/projects", projects_controller.projects_page);

router.get("/announcements", announcements_controller.announcements_page);

router.get("/contact", contact_controller.contact_page);

router.get("/discord", home_controller.discord);

module.exports = router;