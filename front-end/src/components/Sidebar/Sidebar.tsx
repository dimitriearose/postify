import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './Sidebar.scss'
import User from './User'

const names = ['John','Harry','Tom']

const Sidebar = () => {
    return (
        <div className='sidebar'>
            {names.map((name) => (
                <User name={name}/>
            ))}
        </div>
    )
}

export default Sidebar
