const {CustomAPIError} = require('../errors/custom-error')

const errorHandlerMiddleware = (err, req, res, next) =>{
    return res.status(500).json({msg: 'Something went wrong, try again later'}) 
}

// this middleware will handle any error passed to it(from controllers)
// const errorHandlerMiddleware = (err, req, res, next) =>{
//     return res.status(err.status).json({msg: 'err.msg'}) 
// }
// we can do stuff like this also, as in the getTask method, the err object we created has these properties

// for customAPIError

// const errorHandlerMiddleware = (err, req, res, next) =>{
//     if(err instanceof CustomAPIError){
//         return res.status(err.statusCode).json({msg: err.message})
//     }
//     return res.status(500).json({msg: 'Something went wrong, try again later'}) 
// }

module.exports = errorHandlerMiddleware