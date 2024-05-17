const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const BlogsRouter = require("./routes/Blogs.routes")
const app = express()
require("dotenv").config()
app.use(cors())
app.use(express.json())
app.use("/api/blogs", BlogsRouter)
mongoose.connect(process.env.SERVER_KEY).then(() => {
    console.log("connected")
}).catch(err=>console.log('not connected'))

app.listen(8080, () => {
    console.log("server runng  8080")
})