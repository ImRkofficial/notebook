const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require('validator')

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please Enter a valid name'],
        minLength: [3, 'Name should be equal 3 or greater then 3 characters']
    },
    email: {
        type: String,
        required: [true, "Enter a valid Email"],
        unique: true,
        validate: [validator.isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter valid password'],
        minLength: [8, 'Password should be 8 characters long']
    },
    date: {
        type: Date,
        default: Date.now

    }

})

const User = mongoose.model('user', UserSchema)
module.exports = User;