const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const announceSchema = new Schema({
    _id: String,
    message: String,
    author: String,
    date: String,
});

module.exports = mongoose.model("Announcement", announceSchema);