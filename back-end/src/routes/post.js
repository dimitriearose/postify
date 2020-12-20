const Post = require('../models/post')
const express = require('express')
const router = new express.Router()

//CREATE USER
router.post('/post', async (req, res) => {
    try {
        const post = await new Post(req.body)

        if (!post) {
            res.status(400).send({success:false,message:'Bad Request'})
        }

        //! TODO Get Id from logged in user and add it to each individual post that is created

        await post.save()

        res.send({id:post._id,details:post.details,name:post.name,createdAt:post.createdAt})
        
    } catch (error) {
        res.status(500).send({success:false,message:'Server Error'})
    }
})

router.get('/post', async (req, res) => {
    try {
        const posts = await Post.find({})

        if (!posts) {
            res.status(500).send({success:false,message:'Server Error'})
        }


        res.send(posts)
        
    } catch (error) {
        res.status(500).send({success:false,message:'Server Error'})
    }
})

module.exports = router