const {handleError} = require('../errors/new-custom-error')


const customError = (err,req,res,next) =>{
    if(err instanceof handleError)
    {
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).json({msg:err})

}

module.exports = customError