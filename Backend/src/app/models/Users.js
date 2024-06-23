const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = new Schema({
    username: { type: String , maxLength: 255 , require: true},
    email: { type: String , require: true, lowercase: true},
    password: { type: String , require: true},
    createdAt: { type: Date , default : Date.now}
  });

module.exports = mongoose.model('User',Users);
