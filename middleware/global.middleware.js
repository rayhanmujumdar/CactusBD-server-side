const cors = require("cors")
const morgan = require("morgan")
const middleware = [cors(),morgan('dev')]

module.exports = middleware