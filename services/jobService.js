const Jobs = require("../models/job");
const jobPostService = (jobData) => {
  const setJobData = new Jobs(jobData);
  return setJobData.save();
};

const jobListDeleteService = (id) => {
    console.log(id)
    const confirmDelete = Jobs.deleteOne(id)
    return confirmDelete
};

module.exports = {
  jobPostService,
  jobListDeleteService,
};
