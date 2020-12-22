import Post from '../models/post'
import express,{Router} from 'express'
import auth from '../middleware/auth'

const router:Router = express.Router()

//CREATE POST
router.post('/post',auth, async (req, res) => {
    try {
        const post =  new Post(req.body)

        if (!post) {
            res.status(400).send({success:false,message:'Bad Request'})
        }

        await post.save()

        res.send({id:post._id,details:post.details,name:post.name,createdAt:post.createdAt})
        
    } catch (error) {
        res.status(500).send({success:false,message:'Server Error'})
    }
})

router.get('/post',auth, async (req, res) => {
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

export default router