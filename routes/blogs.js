const router = require("express").Router()
const {createController} = require("../controllers/blogs")

router.get('/create',createController)


module.exports = router