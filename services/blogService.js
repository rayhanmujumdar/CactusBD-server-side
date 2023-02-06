const Blogs = require("../models/blogs");

const blogCreateService = (blogData) => {
  const blogContent = new Blogs(blogData);
  return blogContent.save();
};

const blogDeleteService = (id) => {
  const confirmDelete = Blogs.deleteOne(id)
  return confirmDelete
}
module.exports = { blogCreateService,blogDeleteService };
