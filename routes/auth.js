const express = require("express");
const router = express.Router();
const auth_controller = require("../controllers/authController");

router.get("/login", auth_controller.login_page);

router.post("/login/password", auth_controller.login);

router.get("/register", auth_controller.register_page);

router.post("/createUser", auth_controller.register);

module.exports = router;