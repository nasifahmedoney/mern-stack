const express = require('express');
const app = express();
const logger =  require('./logger.js');

// middleware functionality
// request => middleware => response


//using app.use(logger), executes sequentially, i.e. using
//app.use(logger) after '/' will onlly work on urls after '/'
//using app.use('/api',logger) will only work on urls with '/api' and '/api/anything-comes-after-api'
app.use(logger)

app.get('/',(req,res)=>{
    res.send('Home page')
})

app.get('/about',(req,res)=>{
    res.send('About page')
})
app.listen(5000,()=>{
    console.log('server is listening on port 5000...');
})
