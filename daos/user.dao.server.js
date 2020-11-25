const mongoose = require('mongoose')
const userSchema = require('../models/user.schema.server')
const userModel = mongoose.model('UserModel', userSchema)

const findAllUsers = () => userModel.find()
const findUserById = (uid) => userModel.findById(uid)
const createUser = (user) => userModel.create(user)

module.exports = {findAllUsers, findUserById, createUser}
