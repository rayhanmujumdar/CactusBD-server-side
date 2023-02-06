const Jobs = require("../models/job");
const { jobPostService,jobListDeleteService } = require("../services/jobService");
const error = require("../utils/error");

exports.jobPostController = async (req, res, next) => {
  try {
    const jobReqData = req.body;
    const setJobReq = await jobPostService(jobReqData);
    if (setJobReq) {
      return res.status(200).json({ setJobReq, message: "Success" });
    } else {
      throw error("job circulation post is fail", 400);
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
};

exports.getJobListController = async (_req, res, next) => {
  try {
    const getJobList = await Jobs.find();
    if (getJobList) {
      return res.status(200).json(getJobList);
    } else {
      throw error("Not found any list");
    }
  } catch (e) {
    next(e);
  }
};

exports.getJobListDelController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const confirmDelete = await jobListDeleteService({_id:id});
    if (confirmDelete.deletedCount > 0) {
      return res
        .status(200)
        .json({ confirmDelete, message: "Job list successfully deleted" });
    } else {
      throw error("already deleted", 404);
    }
  } catch (e) {
    next(e);
  }
};
