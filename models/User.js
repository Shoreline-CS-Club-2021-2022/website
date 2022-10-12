const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  username: String,
  password: String,
  isAdmin: {
    type: Boolean,
    default: false
  },
  img: {
    type: String,
    default: "default-image.png"
  }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);