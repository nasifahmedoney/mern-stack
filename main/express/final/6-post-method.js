const express = require('express');
const {people} = require('../data');
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname,'./methods-public')));

//parse form data
app.use(express.urlencoded({extended:false}));
//parse json for incoming requests
app.use(express.json());

app.post('/login',(req,res)=>{
    const {name} = req.body;
    res.send(`Hi ${name}`);
    console.log(req.body);
})

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true, data: people})
})

app.post('/api/people',(req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success: false, msg:'name value empty'})
    }
    res.status(201).json({success: true, person: [...people,name]})
})

//put requests, single entry update
app.put('/api/people/:id',(req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    /* name sent as json
    {
        "name": "user"
    }
     */

    const person = people.find((person)=>person.id===Number(id))

    if(!person){
       return res.status(404).json({success:false,msg:`${id} not found`})
    }
    //returns the modified array of people from data.js, 
    const newPeople = people.map((person)=>{
        if(Number(id)===person.id){
            person.name = name;
        }
        return person;
    })
    res.status(200).json({success:true, data:newPeople});
})

//delete method
app.delete('/api/people/:id',(req,res)=>{
    const person = people.find((person)=>person.id===Number(req.params.id))

    if(!person){
       return res.status(404).json({success:false,msg:`${req.params.id} not found`})
    }

    const newPeople = people.filter((user)=>user.id !== Number(req.params.id))

    return res.status(200).json({success:true,data:newPeople})
}) 

app.listen(5000,()=>{
    console.log('server is listening on post 5000...')
});