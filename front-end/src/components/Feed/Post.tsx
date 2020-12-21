import React from 'react'
import {subDays,formatDistance} from 'date-fns'
import './Post.scss'

interface Props {
    createdAt:Date
    details?:string
    name?:string
}
function Post({createdAt,details,name}:Props) {

    // const postedDate = subDays(createdAt,new Date())


    return (
        <div className='post'>
            <h4>{name}</h4>
            <p>{details}</p>
        </div>
    
    )}

export default Post
