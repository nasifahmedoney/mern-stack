
class handleError extends Error{
    constructor(message, statusCode){
        super(message),
        this.statusCode = statusCode
    }
}

const createCustomError = (msg, statusCode)=>{
    return new handleError(msg, statusCode)
}

module.exports = {handleError,createCustomError}