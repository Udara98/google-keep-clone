const express = require("express");

const noteController = require("../controllers/note");

const router = express.Router();

router.get("/notes", noteController.getNotes);
router.post("/notes/addnote", noteController.addNote);

module.exports = router;
