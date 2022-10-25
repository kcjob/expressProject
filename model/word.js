const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordSchema = new Schema({
  word: {
    type: String,
    required: [true, "Word reqired"]
  },
  def: {
    type: String,
    required: [true, "Definition missing"]
  }
});

const Word = mongoose.model("word", wordSchema, 'word');
module.exports = Word;