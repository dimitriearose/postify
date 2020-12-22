import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config({path:'src/.env'})



const connect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/postify', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true 
        })
    } catch (error) {
        console.error(error)
    }
  
    
}
export default connect