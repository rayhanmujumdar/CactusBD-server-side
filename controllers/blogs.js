const blogService = require("../services/blogService")

exports.createController = async (req,res,next) => {
    try{
        const blogData = req.body
        const saveBlog = await blogService(blogData)        
        console.log(saveBlog)
    }catch(e){
        console.log(e)
        next(e)
    }
}