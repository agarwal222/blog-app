const express = require("express")
const {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/postController")
const auth = require("../middleware/auth")

const router = express.Router()

// Secure these routes with the auth middleware
router.post("/", auth, createPost)
router.put("/:id", auth, updatePost)
router.delete("/:id", auth, deletePost)

// Public routes
router.get("/", getPosts)
router.get("/:id", getPostById)

module.exports = router
