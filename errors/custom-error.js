

class CustomAPIError extends Error{
    constructor(message, status){
        super(message)
        this.statusCode = status
    }
}

const createCustomError = (msg, statusCode) =>{
    return new CustomAPIError(msg, statusCode)
}


module.exports = {createCustomError, CustomAPIError}