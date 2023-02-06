require('dotenv').config()
const app = require("./app/app")
const dbConnect = require("./db/dbConnect")
const http = require("http")
const port = process.env.PORT || 5000

const server = http.createServer(app)
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pvqnyc3.mongodb.net/cactusDB`
dbConnect(url)
.then(() => {
    console.log("mongobd is connected")
    server.listen(port,() => {
        console.log(`listening port is ${port}`)
    })
})
