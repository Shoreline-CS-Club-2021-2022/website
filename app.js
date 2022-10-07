require("dotenv").config();
const createError = require('http-errors');
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");

const port = process.env.PORT || 3000;

const User = require('./models/User');
const index = require('./routes/index.js');
const discordAPI = require("./routes/DiscordAPI.js");


const app = express();
app.use(express.static("public"));
app.use('/uploads', express.static('uploads'));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.MONGO_URL);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.set('view engine', 'ejs');

app.use('/', index);
app.use("/api", discordAPI);

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
  });

app.listen(port, () => {
    console.log('server running on port ' + port);
})