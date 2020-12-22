import User from '../models/user'
import express,{Request,Response,Router}from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'

const router:Router =  express.Router()

dotenv.config()


router.post('/user', async (req:Request,res:Response) => {
    try {
        const user = new User(req.body)
    
    if (!user) {
        return res.status(400).send({message:'Bad Request'})
    }

    const token = jwt.sign({id: user._id.toString()}, process.env.JWTSECRET)
    
    await user.save()

    res.status(201).send({id:user._id,name:user.name,email:user.email,token})
   
    } catch (error) {
        res.status(500).send({message:'Server Error'})
    }
    
})

router.post('/login', async (req:Request,res:Response) => {
    const {password,email} = req.body

    try {
        const user =  await User.findOne({email:req.body.email})
    
    if (!user) {
       return res.status(400).send({message:'Bad Request'})
    }

    const isMatch = await bcrypt.compare(password,user.password)

    if (!isMatch){
       return res.status(400).send({message:'Invalid Credentails'})
    }

    const token = jwt.sign({id: user._id.toString()}, process.env.JWTSECRET)
    
   
    res.send({id:user._id,name:user.name,email:user.email,token})
   
    } catch (error) {
        res.status(500).send({message:'Server Error'})
    }
    
})



router.get('/user', async (req:Request,res:Response) => {
    try {
        const users = await User.find({})
    
        if (!users) {
            return res.status(500).send({message:'Server Error'})
        }

        res.send({users,message:'Users Fetched'})
    } catch (error) {
        res.status(500).send({message: 'Server Error'})
    }

})





export default router