const Post = require("../models/post")

// Create a new post - Secured by auth middleware
exports.createPost = async (req, res) => {
  try {
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      author: req.user.userId, // req.user is available because of the auth middleware
    })
    await post.save()
    res.status(201).json(post)
  } catch (error) {
    res.status(500).json({ error: "Error creating post" })
  }
}

// Update an existing post - Secured by auth middleware
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)

    if (!post) {
      return res.status(404).json({ error: "Post not found" })
    }

    // Ensure the user trying to update the post is the author
    if (post.author.toString() !== req.user.userId) {
      return res
        .status(403)
        .json({ error: "You are not authorized to update this post" })
    }

    post.title = req.body.title
    post.content = req.body.content
    await post.save()

    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({ error: "Error updating post" })
  }
}

// Delete an existing post - Secured by auth middleware
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)

    if (!post) {
      return res.status(404).json({ error: "Post not found" })
    }

    // Ensure the user trying to delete the post is the author
    if (post.author.toString() !== req.user.userId) {
      return res
        .status(403)
        .json({ error: "You are not authorized to delete this post" })
    }

    await post.deleteOne()
    res.status(200).json({ message: "Post deleted" })
  } catch (error) {
    res.status(500).json({ error: "Error deleting post" })
  }
}

// Get all posts - Public route
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "username")
    if (!posts) return res.status(404).json({ error: "No posts found" })
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ error: "Error fetching posts" })
  }
}

// Get a single post by ID - Public route
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      "author",
      "username"
    )
    if (!post) return res.status(404).json({ error: "Post not found" })
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({ error: "Error fetching post" })
  }
}
