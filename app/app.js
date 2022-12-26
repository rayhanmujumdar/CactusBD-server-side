const express = require("express")
const { notFoundHandler, errorHandler } = require("../error/global.error")
const app = express()
const mongoose = require("mongoose")
const middleware = require("../middleware/global.middleware")
const router = require("../routes/index")


// mongoose
mongoose.set('strictQuery', true)
// middleware
app.use(middleware)
//route
app.use(router)
//error
app.use(notFoundHandler)
app.use(errorHandler)


module.exports = app