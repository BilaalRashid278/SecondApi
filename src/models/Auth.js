const mongoose = require('mongoose');

const AuthModel = mongoose.model('UserAuth',{
    name : String,
    email : {
        type : String,
        required : true,
        unique : true,
        validate : {
            validator : (value) => {
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
            },
            message: 'Email invalid'
        }
    },
    password :{
        type : String,
        minLength : 8,
        required : true
    },
    date : {
        type : Date,
        default : new Date(),
    },
    isSignUp : {
        type : Boolean,
    },
});

module.exports = AuthModel