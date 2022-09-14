const express = require('express');
const app = express();
const connectDB = require('./db/connection');
const tasks = require('./routes/tasks');
require('dotenv').config();


//middleware
app.use(express.static('./public'))//loads localhost:3000/ with static files in public folder
app.use(express.json())
app.use('/api/v1/tasks',tasks);


const port = 3000;

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`server is listening to port ${port}...`));
    }catch(error){
        console.log(error)
    }
}

start()