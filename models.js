// IMPORTS
const mongoose = require("mongoose");

// SCHEMA MODELS

// ~ NOTES ~
const Note = mongoose.model(
    "Note",
    new mongoose.Schema(
        { title: String, selected: Boolean },
        {
            versionKey: false, // Ignore version key
        }
    )
);

module.exports = {
    Note
}