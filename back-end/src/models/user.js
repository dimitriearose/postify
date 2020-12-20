const mongoose = require('mongoose')
const validator = require('validator')


const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim:true
    },
    email:{
        lowercase:true,
        trim: true,
   required: true,
   validate(value) {
    if (!validator.isEmail(value)) {
      throw new Error('Email is not valid')
    }
  },
    },
    password: {
        type: String,
        required: true,
        minlength: 7
    }
})



const User = mongoose.model('User', userSchema)

module.export = User