const express = require('express')
const router = express.Router();
const {people} = require('../data');

router.get('/',(req,res)=>{
    res.status(200).json({success:true, data: people})
})

router.post('/',(req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success: false, msg:'name value empty'})
    }
    res.status(201).json({success: true, person: [...people,name]})
})

//put requests, single entry update
router.put('/:id',(req,res)=>{
    const {id} = req.params;
    const {name} = req.body;//parse form data
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
router.delete('/:id',(req,res)=>{
    const person = people.find((person)=>person.id===Number(req.params.id))

    if(!person){
       return res.status(404).json({success:false,msg:`${req.params.id} not found`})
    }

    const newPeople = people.filter((user)=>user.id !== Number(req.params.id))

    return res.status(200).json({success:true,data:newPeople})
}) 

module.exports = router;