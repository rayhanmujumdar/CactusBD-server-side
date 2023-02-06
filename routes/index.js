const routes = require("express").Router()
const blogsRoute = require("../routes/blogs")
const jobsRoute = require("./jobs")

routes.use('/api/v1/blogs',blogsRoute)
routes.use('/api/v1/jobs',jobsRoute)

module.exports = routes