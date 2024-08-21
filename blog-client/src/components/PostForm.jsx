import { useState } from "react"
import axios from "axios"
import useAuth from "../hooks/useAuth"
import { useParams } from "react-router-dom"

const PostForm = ({ action }) => {
  useAuth() // Ensures the user is authenticated

  const id = useParams().id
 
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = { title, content }

    if (action === "create") {
      const response = await axios.post(
        "http://localhost:5000/api/posts",
        newPost,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )

      if (response.status === 201) {
        window.location.href = "/"
      }
    } else if (action === "update") {
      const response = await axios.put(`http://localhost:5000/api/posts/${id}`, newPost, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      if (response.status === 200) {
        window.location.href = "/"
      }
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default PostForm
