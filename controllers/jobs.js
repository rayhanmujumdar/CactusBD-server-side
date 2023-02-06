const { jobPostService } = require("../services/jobService");
const error = require("../utils/error");

exports.jobPostController = async (req, res, next) => {
  try {
    const jobReqData = req.body;
    const setJobReq = await jobPostService(jobReqData)
    if(setJobReq){
      return res.status(200).json({setJobReq,message: "Success"})
    }else{
      throw error("job circulation post is fail",400)
    }
  } catch (e) {
    console.log(e)
    next(e);
  }
};
