const asyncWrapper = (fn) =>{
    return async (req,res,next) =>{
        try {
            await fn(req,res,next)// fn-> (async (req,res) => await Task.find({}))
        } catch (error) {
            next(error)
        }
    }
}
/*
const getAllItems = asyncWrapper(
    this function is passed as fn parameter 
    async (req,res)=>{
        const tasks = await Task.find({}) 
        res.status(200).json({tasks})
    }
) 
 */


module.exports = asyncWrapper