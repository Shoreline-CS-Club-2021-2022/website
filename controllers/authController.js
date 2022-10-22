const passport = require("passport");
const User = require('../models/User');

exports.login_page = (req, res) => {
    res.render('login');
}

exports.login = function (req, res, next) {
    passport.authenticate("local", function (err, user, info) {
        if (err) {
            next(err);
        }
        else {
            if (!user) {
                next(info);
            }
            else {
                res.json({ success: true, message: "Authentication successful"});
            }
        }
    })(req, res);
};

exports.register_page = (req, res) => {
    res.render('register');
}

exports.register = function (req, res, next) {
    User.register(new User({ username: req.body.username }), req.body.password, function (err, user) {
        if (err) {
            next(err);
        }
        else {
            req.login(user, (er) => {
                if (er) {
                    next(er);
                }
                else {
                    res.json({ success: true, message: "Your account has been saved" });
                }
            });
        }
    });
}

exports.logout = function (req, res, next) {
    req.logout(function (err) {
        if (err) {
            next(err)
        }
    });
    res.redirect("/");
};
