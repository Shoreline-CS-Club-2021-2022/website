const passport = require("passport");
const User = require('../models/User');

exports.login_page = (req, res) => {
    res.render('login', { message : false, user : req.user });
}

// exports.login = function (req, res, next) {
//     const user = new User({
//         username: req.body.username,
//         password: req.body.password
//     });

//     req.login(user, function (err) {
//         if (err) {
//             next(err);
//             res.render('login', { message : "Incorrect username/password", user : req.user });
//         } else {
//             passport.authenticate("local")(req, res, function () {
//                 res.redirect("/");
//             });
//         }
//     });
// };

// function (req, res, next) {
//     passport.authenticate("local", function (err, user, info) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             if (!user) {
//                 res.render('login', { message : "Incorrect username/password", user : req.user });
//             }
//             else {
//                 res.redirect('/');
//             }
//         }
//     })(req, res);
//};

exports.register_page = (req, res) => {
    res.render('register', {user : req.user});
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
                    res.redirect('/');
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
