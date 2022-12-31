const {model,Schema} = require('mongoose')
const {phoneValidate,emailValidate,cvLinkValidate} = require("../utils/job.model.validate")

const jobsSchema = new Schema({
    name: {
        type: String,
        min: [6,"Must be at least 6"],
        require: [true,"Must be required"]
    },
    email: {
        type: String,
        require: [true,"Must be required"],
        validate: {
            validator: emailValidate,
            message : props => `${props.email} is not a valid email address`
        }
    },
    phone: {
        type: Number,
        require: [true,"Must be required"],
        validate: {
            validator: phoneValidate,
            message:  props => `${props.value} is not a valid phone number!`
        }
    },
    cvLink: {
        type: String,
        require: [true,"Must be require"],
        validate: {
            validator: cvLinkValidate,
            message: props => `${props.value} is not a valid link`
        }
    },
    description: {
        type: String,
        require: [true,"Must be required"],
        min: [50, "Must be at least 6"],
        max: 400
    }
})

const Jobs = model("job circulation",jobsSchema)

module.exports = Jobs