const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const Schema = mongoose.Schema;

const BaseUserSchema = new Schema({
    _id: String, 
    email: { type: String, required: true },
    name: { type: String, required: true },
//0    profilePicUrl: { type: String, required: false },
    access_token: String, 
    refresh_token: String, 
    scope: String, 
    token_type: String, 
    expiry: String,
    EXP: Number,
    Health: String, 
    Died_dated: Date, 
    Habbits: Object
})

const User = mongoose.model('user', BaseUserSchema);

module.exports = User;