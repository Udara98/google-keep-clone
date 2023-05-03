const mongoose = require("mongoose");
const schema = mongoose.Schema;

const noteSchema = new schema({
  text: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    default: Date.now,
  },
});

const note = mongoose.model("note",noteSchema);

module.exports = note;
