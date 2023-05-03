const Note = require("../models/note");

exports.getNotes = async (req, res, next) => {
  const notes = await Note.find();
  res.json(notes);
};

exports.addNote = (req, res, next) => {
  const newNote = new Note({
    text: req.body.text,
  });

  newNote.save();
  res.json(newNote);
};
