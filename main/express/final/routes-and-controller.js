const express = require('express');
const path = require('path')
const app = express();

const people = require('../routes/people')
const auth = require('../routes/auth')


app.use(express.static(path.join(__dirname,'./methods-public')));

//parse form data
app.use(express.urlencoded({extended:false}));
//parse json for incoming requests
app.use(express.json());

app.use('/api/people', people)
app.use('/login', auth)




app.listen(5000,()=>{
    console.log('server is listening on post 5000...')
});