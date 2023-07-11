const express = require("express");

const noteController = require("../controllers/note");

const router = express.Router();

router.get("/notes", noteController.getNotes);
router.post("/notes/addnote", noteController.addNote);
router.put("/notes/updatenote/:noteId", noteController.updateNote);
router.delete("/notes/deletenote/:noteId", noteController.deleteNote);


module.exports = router;
