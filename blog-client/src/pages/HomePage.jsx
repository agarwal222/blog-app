import { useContext } from "react"
import PostList from "../components/PostList"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import LogoutButton from "../components/LogoutButton"

const HomePage = () => {
  const { isAuthenticated } = useContext(AuthContext)
  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <>
      {isAuthenticated ? (
          <div className="container">
          <h1 className="title">Welcome, {user.username}
          <LogoutButton />
          </h1>
          <Link to="/create">Create New Post</Link>
        </div>
      ) : (
        <div className="container">
          <h1>Blog Home</h1>
          <Link to="/login">Login</Link><br />
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
      <PostList />
    </>
  )
}

export default HomePage
