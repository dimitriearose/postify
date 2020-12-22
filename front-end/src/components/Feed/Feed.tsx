import React ,{useEffect,useState}from 'react'
import Post from './Post'
import axios from 'axios'
import './Feed.scss'

function Feed() {
    const [posts,setPosts] = useState([])
    
    const [message,setPosts] = useState([])

    useEffect(() => {
        const fetchPostes = async () => {
            const {data} = await axios.get('http://localhost:3001/post')
            setPosts(data)
            console.log(data)
        }

        fetchPostes()

    },[])
    return (
        <div className='feed'>
            <form onSubmit={} className="feed__form">
                <input type="text"/>                
            </form>
            <div className="feed__posts">
                {posts.map((post) => {
                    return <Post createdAt={post.createdAt} name={post.name} details={post.details} key={post._id} creator={post.creator.name} creatorEmail={post.creator.email}/>
                })}
            </div>
        </div>
    )
}

export default Feed
