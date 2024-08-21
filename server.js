const express = require("express")
const connectDB = require("./config/db")
const authRoutes = require("./routes/auth")
const postRoutes = require("./routes/posts")
const errorHandler = require("./middleware/errorHandler")
const cors = require("cors")

require("dotenv").config()

const app = express()

// Connect to the database
connectDB()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/posts", postRoutes)

// Error handling middleware
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
