const mongoose = require('mongoose');

const TaskManagerSchema = new mongoose.Schema({
    //adding vaidation to data
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[20, 'name must be less than 20 chars']
    },
    completed:{
        type:Boolean,
        default: false
    }
})


module.exports = mongoose.model('Tasks',TaskManagerSchema)//Name of the model, schema for the model
