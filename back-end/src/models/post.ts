import mongoose,{Document} from 'mongoose'

export interface Post extends Document {
    name:string 
    details:string 
    photo:Buffer 
    creator:mongoose.Schema.Types.ObjectId
    createdAt:Date
}

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    details: {
        type: String,
        trim: true,
        required: true
    },
    photo:{
        type:Buffer
    },
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
    
},{timestamps:true})

const PostModel = mongoose.model<Post>('Post', postSchema)

export default PostModel