const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: String,
  numFriends: Number,
  createdOn: Date,
}, {collection: 'users'})

module.exports = userSchema
