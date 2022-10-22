const passport = require("passport");
const User = require('../models/User');

exports.login_page = (req, res) => {
    res.render('login');
}

exports.login = function (req, res) {
    passport.authenticate("local", function (err, user, info) {
        if (err) {
            res.json({ success: false, message: err });
        }
        else {
            if (!user) {
                res.json({ success: false, message: info.message });
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

exports.register = function (req, res) {
    User.register(new User({ username: req.body.username }), req.body.password, function (err, user) {
        if (err) {
            res.json({ success: false, message: "Your account could not be saved. Error: " + err });
        }
        else {
            req.login(user, (er) => {
                if (er) {
                    res.json({ success: false, message: er });
                }
                else {
                    res.json({ success: true, message: "Your account has been saved" });
                }
            });
        }
    });
}
