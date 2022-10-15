const express = require("express");
const router = express.Router();
const admin_controller = require("../controllers/adminController");

router.get("/", admin_controller.admin_page);

router.get("/users", admin_controller.users_page);

router.get("/addProject", admin_controller.add_project_page);

module.exports = router;