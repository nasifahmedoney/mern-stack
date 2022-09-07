const task = require('../models/DbSchema')

const getAllItems = async (req,res)=>{
    try {
        const allitmes = await task.find({}) 
        res.status(201).json({allitmes})
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
const getTask = (req,res)=>{
    res.json({id: req.params.id});
}
const updateTask = (req,res)=>{
    res.send('update task');
}
const deleteTask = (req,res)=>{
    res.send('delete task');
}
module.exports={
    getAllItems,
    createTask,
    getTask,
    updateTask,
    deleteTask
}