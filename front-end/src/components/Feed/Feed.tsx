import React, { useEffect, useState, useContext } from "react"
import Post from "./Post"
import axios from "axios"
import UserState from "../../context/userContext"
import "./Feed.scss"

function Feed() {
  const [posts, setPosts] = useState([])

  const [message, setMessage] = useState("")
  const [name, setName] = useState("")

  const { userInfo } = useContext(UserState)

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get("http://localhost:3001/post")
      setPosts(data)
      console.log(data)
    }

    fetchPosts()
  }, [])

  const onSubmit = async () => {
    if (name.trim().length > 1 && message.trim().length > 1) {
      await axios.post(
        "http://localhost:3001/post",
        { details: message, name: name },
        { headers: { Authorization: `Bearer ${userInfo.userInfo?.token}` } }
      )
    }
  }
  return (
    <div className='feed'>
      <form onSubmit={onSubmit} className='feed__form'>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Post Topic'
        />
        <input
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Post Message'
        />
        <button type='submit'>Submit</button>
      </form>
      <div className='feed__posts'>
        {posts.map((post) => {
          return (
            <Post
              createdAt={post.createdAt}
              name={post.name}
              details={post.details}
              key={post._id}
              creator={post.creator.name}
              creatorEmail={post.creator.email}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Feed
