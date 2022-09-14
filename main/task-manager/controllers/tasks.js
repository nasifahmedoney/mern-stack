const task = require('../models/DbSchema')

const getAllItems = async (req,res)=>{
    try {
        const tasks = await task.find({}) 
        res.status(201).json({tasks})
    } catch (error) {
        res.status(500).json(error)
    }
}
const createTask = async (req,res)=>{
    try {
        const post = await task.create(req.body) 
        res.status(201).json(post)
    } catch (error) {
        //entire error
        res.status(500).json(error)
        //only the erros msg
        //res.status(500).json(error.errors.name.message)
    }
    
}

// get single task
const getTask = async (req,res)=>{
    try {
        const {id:taskID} = req.params;
        const singleTask = await task.findOne({_id:taskID})
        if(!singleTask){
            return res.status(404).json({ msg: `${taskID} not found.` })
        }
        res.status(404).json(singleTask)
    } catch (error) {
        res.status(500).json(error)
    }
    
}
const updateTask = async (req,res)=>{
    try {
        const taskID = req.params.id
        const updateTask = await task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true
        })
        if(!updateTask){
            return res.status(404).json({msg:`no task with id: ${taskID}`})
        }
        res.status(200).json({updateTask})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const deleteTask = async (req,res)=>{
    try {
        const {id:taskID} = req.params;
        const deleteTask = await task.findOneAndDelete({_id:taskID})
        if(!deleteTask){
            return res.status(404).json({ msg: `${taskID} not found.` })
        }
        res.status(404).json({deleteTask})
    } catch (error) {
        res.status(500).json({error})
    }
}
module.exports={
    getAllItems,
    createTask,
    getTask,
    updateTask,
    deleteTask
}