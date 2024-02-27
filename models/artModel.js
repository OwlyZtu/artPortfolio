const mongoose = require('mongoose');

const artSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'An art must have a name'],
    unique: true,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'An art must have a file'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Art = mongoose.model('Art', artSchema);

module.exports = Art;
