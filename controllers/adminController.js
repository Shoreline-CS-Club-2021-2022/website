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

exports.update_user = function (req, res) {
  if (req.user?.isAdmin) {
    let isAdmin = !(req.body.isAdmin == "true")
    let id = req.body.userid;
    console.log(req.user)
    User.updateOne({
      _id: id
    }, {
      isAdmin: isAdmin
    },
      function (err) {
        if (!err) {
          res.redirect(req.header('Referer'));
        } else {
          res.send(err);
        }
      });
  } else {
    res.redirect("/auth/login");
  }
};

exports.delete_user = function (req, res) {
  if (req.user?.isAdmin) {
    const user_id = req.body.id;
    User.findByIdAndRemove(user_id, function (err, docs) {
      if (err) {
        res.send(err)
      }
      else {
        res.redirect(req.header('Referer'));
      }
    });
  } else {
    res.redirect("/auth/login");
  }
}