const {model,Schema} = require('mongoose')
const blogSchema = new Schema({
    // _id: Schema.Types.ObjectId,
    title: {
        type: String,
        require: [true,"Must be required"]
    },
    title2: {
        type: String
    },
    title3: {
        type: String
    },
    img:  {
        type: String,
        require: [true,"Must be required"]
    },
    content:  {
        type: String,
        require: [true,"Must be required"]
    },
    content2:  {
        type: String
    },
    content3:  {
        type: String 
    }
})

const Blogs = model("blogs",blogSchema)

module.exports = Blogs
