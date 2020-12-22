import Post from '../models/post'
import express,{Router} from 'express'
import auth from '../middleware/auth'
import {RequestPlus} from '../middleware/auth'

const router:Router = express.Router()

//CREATE POST
router.post('/post',auth, async (req:RequestPlus, res) => {
    const {details,name} = req.body
    try {
        const post =  new Post({details,name, creator:req.user._id})

        if (!post) {
            res.status(400).send({success:false,message:'Bad Request'})
        }

        await post.save()

        res.send({id:post._id,details:post.details,name:post.name,createdAt:post.createdAt})
        
    } catch (error) {
        res.status(500).send({success:false,message:'Server Error'})
    }
})

router.get('/post', async (req, res) => {
    try {
        const posts = await Post.find({}).populate({path:'creator',select:'name email'}).sort('-createdAt')

        if (!posts) {
            res.status(500).send({success:false,message:'Server Error'})
        }


        res.send(posts)
        
    } catch (error) {
        res.status(500).send({success:false,message:'Server Error'})
    }
})

export default router