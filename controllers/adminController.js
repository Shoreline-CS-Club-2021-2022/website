exports.admin_page = (req, res) => {
    if (req.user?.isAdmin) {
        res.render("admin", {
            user: req.user
        });
    } else {
        res.redirect("/auth/login");
    }
}

exports.users_page = (req, res) => {
    if (req.user?.isAdmin) {
        res.render("users", {
            user: req.user
        });
    } else {
        res.redirect("/auth/login");
    }
}

exports.add_project_page = (req, res) => {
    if (req.user?.isAdmin) {
        res.render("addProject", {
            user: req.user
        });
    } else {
        res.redirect("/auth/login");
    }
}