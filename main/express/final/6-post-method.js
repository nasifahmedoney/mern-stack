const express = require('express');
const {data} = require('../data');
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname,'./methods-public')));
app.use(express.urlencoded({extended:false}));
app.post('/login',(req,res)=>{
    const {name} = req.body;
    res.send(`Hi ${name}`);
    console.log(req.body);
})

app.listen(5000,()=>{
    console.log('server is listening on post 5000...')
});