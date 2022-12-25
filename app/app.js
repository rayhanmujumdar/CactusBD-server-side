const express = require("express")
const app = express()
const middleware = require("../middleware/global.middleware")
// middleware
app.use(middleware)
app.post('/home',(req,res) => {
    res.json({message: "success"})
})

module.exports = app