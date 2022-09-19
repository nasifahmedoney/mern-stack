const Task = require('../models/DbSchema')
const asyncWrapper = require('../middleware/async')


const getAllItems = asyncWrapper(
    async (req,res)=>{
        const tasks = await Task.find({}) 
        res.status(200).json({tasks})
    }
) 
const createTask = asyncWrapper(
    async (req,res)=>{
        const task = await Task.create(req.body) 
        res.status(200).json({task})
    }
)
    
// get single task by id
const getTask = asyncWrapper(
    async (req,res)=>{
        const {id:taskID} = req.params;
        
        const task = await Task.findOne({_id:taskID})
        if(!task){
            return res.status(404).json({ msg: `${taskID} not found.` })
        }
        res.status(200).json({task})    
    }
) 
const updateTask = asyncWrapper(
    async (req,res)=>{
        const taskID = req.params.id
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true
        })
        if(!task){
            return res.status(404).json({msg:`no task with id: ${taskID}`})
        }
        res.status(200).json({task})
    }
) 
const deleteTask = asyncWrapper(
    async (req,res)=>{
        
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({ msg: `${taskID} not found.` })
        }
        res.status(404).json({task})
    }
) 
module.exports={
    getAllItems,
    createTask,
    getTask,
    updateTask,
    deleteTask
}