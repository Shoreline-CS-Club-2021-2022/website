const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const discordServerSchema = Schema({
    _id: String,
    joinChannel: String,
    leaveChannel: String,
    rulesChannel: String,
    announceChannel: String,
    isValid: {
      type: Boolean,
      default: true
    }
  });

  module.exports = mongoose.model("DiscordServer", discordServerSchema);