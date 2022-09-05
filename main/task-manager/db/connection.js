const mongoose = require('mongoose')



const connectionString = 'mongodb+srv://Nasif:abcd1234@node-express-tutorial.nrzfwtf.mongodb.net/TaskManager?retryWrites=true&w=majority'

mongoose
.connect(connectionString)
.then(()=>{
    console.log('connected to database...')
})
.catch((err)=>{
    console.log(err);
})