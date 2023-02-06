const Blogs = require("../models/blogs")
const {blogCreateService,blogDeleteService} = require("../services/blogService")
const error = require('../utils/error')

exports.createController = async (req,res,next) => {
    try{
        const blogData = req.body
        const setBlog = await blogCreateService(blogData)
        if(setBlog){
            return res.json({setBlog,message: "Success"})
        }else{
            throw error("Blog is not set",400)
        }
    }catch(e){
        next(e)
    }
}

exports.getBlogsController = async (req,res,next) => {
    try{
        const blogs = await Blogs.find({})
        if(blogs.length){
            return res.status(200).json(blogs)
        }else{
            throw error("Blogs Not Found",404)
        }
    }
    catch(e){
        next(e)
    }
}

exports.getBlogDeleteController = async (req,res,next) => {
    try{
        const { id: _id} = req.params
        const blogDelete = await blogDeleteService({_id})
        if(blogDelete.deletedCount > 0){
            res.status(200).json({blogDelete,message: "Blog successfully delete"})
        }else{
            throw error("Already deleted",400)
        }
    }catch(e){
        next(e)
    }
}