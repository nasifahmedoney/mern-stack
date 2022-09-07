const task = require('../models/DbSchema')

const getAllItems = (req,res)=>{
    res.send('all items');
}
const createTask = async (req,res)=>{
    const post = await task.create(req.body)//send json data from postman 
    res.status(201).json(post);
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