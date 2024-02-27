const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name'],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'A user must have a password'],
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
