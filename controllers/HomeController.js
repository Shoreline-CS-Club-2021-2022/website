const Project = require('../models/projects');

exports.index_page = function (req, res) {
    Project.find({}, function (err, posts) {
        if (err) {
            console.log(err);
        } else {
            res.render('index', {
                Projects: posts,
                user: req.user
            });
        }
    })
};

exports.about_page = function (req, res) {
    res.render('about', {
        user: req.user
    });
}

exports.discord = function (req, res) {
    res.redirect("//https://discord.gg/Qq8wu8N4jH");
}