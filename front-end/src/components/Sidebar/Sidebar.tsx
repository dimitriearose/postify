import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './Sidebar.scss'
import User from './User'


const Sidebar = () => {
 const [users,setUsers] = useState<any>([])

    useEffect(() => {

        const fetchUsers = async () => {
        const {data} = await axios.get('http://localhost:3001/user',{headers:{'Content-Type':'application/json'}})  
    
        setUsers(data.users)
 }

 fetchUsers()
        
    }, [])
    
    return (
        <div className='sidebar'>
            {users.map((user:any) => (
                <User name={user.name} key={user._id}/>
            ))}
        </div>
    )
}

export default Sidebar
