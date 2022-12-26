const Project = require('../models/projects');
const User = require('../models/User');


exports.admin_page = (req, res) => {
    if (req.user?.isAdmin) {
        res.render("admin", {
            user: req.user
        });
    } else {
        res.redirect("/auth/login");
    }
}

exports.users_page = function (req, res) {
  if (req.user?.isAdmin) {
    User.find({}, function (err, users) {
        if (err) {
            console.log(err);
        } else {
            res.render("users", {
                Users: users,
                user: req.user
            });
        }
    })
  } else {
    res.redirect("/auth/login");
  }
};