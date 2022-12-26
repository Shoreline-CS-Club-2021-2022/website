const passport = require("passport");
const express = require("express");
const router = express.Router();
const auth_controller = require("../controllers/authController");

router.get("/login", auth_controller.login_page);

router.post(
    "/login",
    passport.authenticate('local', {
        failureRedirect: '/auth/login',
        successRedirect: '/',
    }),
        (req, res) => {
            console.log(req.user);
        }
);

router.get("/register", auth_controller.register_page);

router.post("/createUser", auth_controller.register);

router.get("/logout", auth_controller.logout);

module.exports = router;