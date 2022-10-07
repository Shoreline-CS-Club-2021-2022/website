require('dotenv').config();
const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

const index = require('./routes/index.js');

app.set('view engine', 'ejs');

app.use('/', index);

app.listen(port, () => {
    console.log('server running on port ' + port);
})