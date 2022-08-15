const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'../public')));//use absolute path

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../navbar-app/index.html'));//absolute path
})
 
app.get('*',(req,res)=>{
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(5000,()=>{
    console.log('server listening to port: 5000');
    console.log(path.resolve(__dirname,'../navbar-app/index.html'))
});

/*
console.log(__dirname);
output: C:\mern-stack\main\express\final 
 */