const express = require('express');
const HomeController = express.Router();

HomeController.route('/').get((req, res) => {
    res.render('index');
})

module.exports = HomeController;