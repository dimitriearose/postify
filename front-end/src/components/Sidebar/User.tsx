import React from 'react'
import './User.scss'


interface UserProps {
    name:string
}

function User({name}:UserProps) {
    return (
        <div className='user'>
            <h5>{name}</h5>     
        </div>
    )
}

export default User
