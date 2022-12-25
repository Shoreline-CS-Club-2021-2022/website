const Announcement = require('../models/Announcement');

exports.announcements_page = (req, res) => {
    Announcement.find({}, function (err, announcements) {
        if (err) {
            console.log(err);
        } else {
            res.render('announcements', {
                announcements: announcements,
                user: req.user
            });
        }
    })
};
