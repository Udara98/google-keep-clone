const Note = require("../models/note");

exports.getNotes = async (req, res, next) => {
  try {
    const notes = await Note.find().sort({ timestamp: -1 });
    res.json(notes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch notes." });
  }
};

exports.addNote = async (req, res, next) => {
  try {
    const newNote = new Note({
      text: req.body.note,
      timestamp: Date.now(),
      title: req.body.title,
    });

    await newNote.save(); 

    const updatedNotes = await Note.find(); 
    res.json(updatedNotes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to add note." });
  }
};

exports.deleteNote = async (req, res) => {
  const { noteId } = req.params;
  console.log(noteId);

  try {
    const deletedNote = await Note.findByIdAndRemove(noteId);
    console.log(deletedNote);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    const updatedNotes = await Note.find();
    res.json(updatedNotes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to delete note." });
  }
};

exports.updateNote = async (req, res, next) => {
  const { noteId } = req.params;
  const { text, title } = req.body;

  try {
    const updatedNote = await Note.findByIdAndUpdate(
      noteId,
      { text, title },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(updatedNote);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update note." });
  }
};
