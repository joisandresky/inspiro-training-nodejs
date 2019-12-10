var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  title: { type: String, required: true },
  done: { type: Boolean, default: false },
  updated: { type: Date }
});

module.exports = mongoose.model('Todo', TodoSchema);