const mongoose = require('mongoose');

const TaskManagerSchema = new mongoose.Schema({
    name:String,
    completed:Boolean
})


module.exports = mongoose.model('Tasks',TaskManagerSchema)//Name of the model, schema for the model