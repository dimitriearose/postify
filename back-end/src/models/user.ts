import mongoose,{Document} from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'

interface User extends Document {
  name:string
  email:string
password:string
createdAt:Date
updatedAt:Date
}


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim:true,
        required:true,
    },
    email:{
        type:String,
        lowercase:true,
        trim: true,
        unique:true,
   required: true,
   validate(value:string) {
    if (!validator.isEmail(value)) {
      throw new Error('Email is not valid')
    }
  },
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
})

userSchema.pre<User>('save',async function(next){
  if (this.isModified('password')){
    this.password = await bcrypt.hash(this.password, 8)
  }

  next()
})

const User = mongoose.model<User>('User', userSchema)

export default User