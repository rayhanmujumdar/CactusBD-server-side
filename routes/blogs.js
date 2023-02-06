const router = require("express").Router()
const {createController} = require("../controllers/blogs")
const {getBlogsController} = require("../controllers/blogs")
const {getBlogDeleteController} = require("../controllers/blogs")

/**
 * get my all blogs
 * @api api/v1/blogs/create
 * @apiDescription view my all blog item to client 
 * @visibility public
 * @method GET
*/
router.get('/',getBlogsController)
/**
 * create a new blogs
 * @api api/v1/blogs/create
 * @apiDescription create a new blogs to viewing client blogs
 * @visibility private
 * @method POST
*/
router.post('/create',createController)
/**
 * Delete my single blog item
 * @api api/v1/blogs/create
 * @apiDescription delete my blog item to this route
 * @visibility private
 * @method DELETE
*/
router.delete('/delete_blog/:id',getBlogDeleteController)
module.exports = router