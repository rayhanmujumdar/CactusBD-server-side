const Blogs = require("../models/blogs")

const blogService = (blogData) => {
    const blogContent = new Blogs(blogData)
    return blogContent.save()
}

module.exports = blogService