import {useEffect,useState} from 'react'
import axios from 'axios'
import './App.scss';

function App() {

  const [posts,setPosts] = useState([])

useEffect(() => {
  const fetchPosts = async () => {
    const {data} = await axios.get('http://localhost:3001/post')
    setPosts(data)
  }
  fetchPosts()
  
},[setPosts])
  return (
    <div className="App">
      {posts.map((post) => (
        <div className="post">
          <h4>{post.name}</h4>
          <p>{post.details}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
