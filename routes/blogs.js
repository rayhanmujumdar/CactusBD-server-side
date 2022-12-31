const router = require("express").Router()
const {createController} = require("../controllers/blogs")

/**
 * create a new blogs
 * @api api/v1/blogs/create
 * @apiDescription create a new blogs to viewing client blogs
 * @visibility public
 * @method POST
*/
router.post('/create',createController)
module.exports = router