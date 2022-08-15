const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    console.log('user has hit the home page')
    res.send('<h1>home page</h1>');
})

app.get('/about',(req,res)=>{
    res.send('<h3>about page</h3>');
})

app.get('/contact',(req,res)=>{
    res.send('<h3>contact page</h3>');
})
 
app.get('*',(req,res)=>{
    res.send('about page');
})

app.listen(5000);

//request methods
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen

/*
console.log(__dirname);
output: C:\mern-stack\main\express\final 
 */
