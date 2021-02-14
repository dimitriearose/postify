import { useEffect, useContext, useState } from "react"
import "./Profile.scss"
import axios from "axios"
import UserState from "../../context/userContext"
import { Edit } from "@material-ui/icons"

function Profile() {
  const { userInfo } = useContext(UserState)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        `http://localhost:3001/user/${userInfo?.userInfo?.id}`
      )
      setUser(data)
    }

    fetchPosts()
  }, [])

  return (
    <div className='profile'>
      <h1>User Profile</h1>
      <div className='profile__field'>
        <h4>{user?.email}</h4>
      </div>
      <div className='profile__field'>
        <h4>{user?.name}</h4>
      </div>
    </div>
  )
}

export default Profile
