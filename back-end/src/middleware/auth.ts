import jwt from 'jsonwebtoken'
import User from '../models/user'
import {Request,Response,NextFunction} from 'express'
import dotenv from 'dotenv'


export interface RequestPlus extends Request {
    user?:any
}

const auth = async (req:RequestPlus,res:Response,next:NextFunction) => {
    const token = req.headers.authorization.split(' ')[1]
    const userId:any = jwt.verify(token,process.env.JWTSECRET)


    const user = await User.findById(userId.id)

    if (!user){
        return res.status(404).send('Please Authenticate')
    }


    req.user = user
}


export default auth