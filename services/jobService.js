const Jobs = require("../models/job")
const jobPostService = (jobData) => {
    const setJobData = new Jobs(jobData)
    return setJobData.save()
}

module.exports = {
    jobPostService
}