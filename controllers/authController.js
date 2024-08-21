const User = require("../models/user")
const jwt = require("jsonwebtoken")

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = new User({ username, password })
    await user.save()
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)
    res.status(201).json({ token })
  } catch (error) {
    res.status(500).json({ error: "Error registering user" })
  }
}

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ error: "Invalid credentials" })
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)
    res.status(200).json({
      token,
      user: {
        id: user._id,
        username: user.username,
      },
    })
  } catch (error) {
    res.status(500).json({ error: "Error logging in" })
  }
}

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId)
    res.status(200).json({ user: { id: user._id, username: user.username } })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Error getting user" })
  }
}
