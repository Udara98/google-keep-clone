const mongoose = require("mongoose");
const { Schema } = mongoose;

const noteSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  title:{
    type:String,
  }
})

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
