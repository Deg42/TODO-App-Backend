// IMPORTS
const { Note } = require("./models.js");

// CONTROLLER CRUD FUNCTIONS

// ~ NOTES ~
exports.readNotes = (req, res) =>
    Note.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

exports.readNote = (req, res) =>
    Note.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

exports.deleteNote = (req, res) =>
    Note.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

exports.updateNote = (req, res) =>
    Note.findOneAndUpdate(
        { _id: req.params.id },
        {
            $set: {
                title: req.body.title,
                selected: req.body.selected
            },
        },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );

exports.createNote = (req, res) =>
    new Note({
        title: req.body.title,
        selected: req.body.selected
    }).save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

