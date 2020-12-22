import React from 'react'
import {formatDistance} from 'date-fns'
import './Post.scss'

interface Props {
    createdAt:Date
    details?:string
    name?:string
    creator:string
    creatorEmail:string
}
function Post({createdAt,details,name,creator,creatorEmail}:Props) {

    const postedDate = formatDistance(new Date(createdAt),new Date())

    return (
        <div className='post'>
            <h4>{name}</h4>
            <p>{details}</p>
            <p>{postedDate}</p>
            <p>{creator}</p>
        </div>
    
    )}

export default Post
