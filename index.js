require('dotenv').config()
const app = require("./app/app")
const dbConnect = require("./db/dbConnect")
const http = require("http")
const port = process.env.PORT || 5000

const server = http.createServer(app)

dbConnect("mongodb://127.0.0.1:2717/test")
.then(() => {
    console.log("mongobd is connected")
    server.listen(port,() => {
        console.log(`listening port is ${port}`)
    })
})
