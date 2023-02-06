const router = require("express").Router()
const {getJobListController,getJobListDelController,jobPostController} = require('../controllers/jobs')

/**
 * get all job list
 * @api api/v1/jobs/job_list
 * @apiDescription admin can see all job details list
 * @visibility private
 * @method GET
*/
router.get('/job_list',getJobListController)

/**
 * post a new yourself details
 * @api api/v1/jobs/job_circulation
 * @apiDescription client post to his job cv ,phone, email etc to this route
 * @visibility public
 * @method POST
*/
router.post('/job_circulation',jobPostController)

/**
 * delete job list item
 * @api api/v1/jobs/job_list_del
 * @apiDescription admin can delete job list items
 * @visibility private
 * @method GET
*/
router.delete('/job_list_del/:id',getJobListDelController)

module.exports = router