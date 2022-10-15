const express = require("express");
const router = express.Router();
const home_controller = require("../controllers/homeController.js");
const projects_controller = require("../controllers/projectsController");
const announcements_controller = require("../controllers/announcementsController");
const contact_controller = require("../controllers/contactController");
const auth_controller = require("../controllers/authController");
const admin_controller = require("../controllers/adminController");

//public routes
router.get("/", home_controller.index_page);

router.get("/about", home_controller.about_page);

router.get("/projects", projects_controller.projects_page);

router.get("/announcements", announcements_controller.announcements_page);

router.get("/contact", contact_controller.contact_page);

//authentication routes
router.get("/auth/login", auth_controller.login_page);

router.get("/auth/register", auth_controller.register_page);

//admin routes
router.get("/admin", admin_controller.admin_page);

router.get("/admin/users", admin_controller.users_page);

router.get("/admin/addProject", admin_controller.add_project_page);

module.exports = router;