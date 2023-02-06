const notFoundHandler = (_req,_res,next) => {
    const err = new Error("Not found")
    err.status = 400
    next(err)
}

const errorHandler = (err,_req,res,_next) => {
    if(err.status){
        res.status(err.status).json(err.message)
    }
    console.log(err.message)
    return res.status(500).json({message: "internal server error"})
}

module.exports = {
    notFoundHandler,
    errorHandler
}