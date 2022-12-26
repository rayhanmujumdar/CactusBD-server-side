const routes = require("express").Router()
const blogsRoute = require("../routes/blogs")

routes.use('/api/v1/blogs',blogsRoute)

module.exports = routes