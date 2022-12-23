exports.index_page = function (req, res) {
    res.render('index', {
        user: req.user
    });
};

exports.about_page = function (req, res) {
    res.render('about', {
        user: req.user
    });
}