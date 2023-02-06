const router = require("express").Router()
const {jobPostController} = require('../controllers/jobs')

/**
 * create a new blogs
 * @api api/v1/jobs/job_circulation
 * @apiDescription client post to his job cv ,phone, email etc to this route
 * @visibility public
 * @method POST
*/
router.post('/job_circulation',jobPostController)

module.exports = router