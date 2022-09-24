const express = require('express');
const app = express();
const connectDB = require('./db/connection');
const tasks = require('./routes/tasks');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const customError = require('./middleware/custom-errors');

//middleware
app.use(express.static('./public'))//loads localhost:3000/ with static files in public folder
app.use(express.json())//json parse
app.use('/api/v1/tasks',tasks);//routes
app.use(notFound);//invalid routes, if routes are okay goto asyncWrapper middlware in controller,on error, next(error) redirects to the next middlware customError
app.use(customError);

const port = process.env.PORT || 3000;
// set port .env file, add PORT=6000

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`server is listening to port ${port}...`));
    }catch(error){
        console.log(error)
    }
}

start()