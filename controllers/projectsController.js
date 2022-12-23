exports.projects_page = (req, res) => {
    res.render('projects', {
        user: req.user
    });
}