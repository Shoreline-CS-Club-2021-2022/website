const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const discordUserSchema = Schema({
    _id: String,
    city: String,
    pronouns: String,
    admin: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("DiscordUser", discordUserSchema);