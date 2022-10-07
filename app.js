require('dotenv').config();
const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

const HomeController = require('./controllers/HomeController');

app.set('view engine', 'ejs');

app.use('/', HomeController);

app.listen(port, () => {
    console.log('server running on port ' + port);
})