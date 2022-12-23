exports.announcements_page = (req, res) => {
    res.render('announcements', {
        user: req.user
    });
}