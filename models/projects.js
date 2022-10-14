const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: String,
    githubLink: String,
    techStacks: String,
    demoLink: String,
    description: String,
    images: Array,
    isFeatured: Boolean
});

module.exports = mongoose.model("Project", projectSchema);