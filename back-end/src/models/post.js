const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
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
    // photo:{
    //     type:File
    // },
    // creator:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     required:true
    // }
    
},{timestamps:true})

const Post = mongoose.model('Post', postSchema)

module.exports = Post