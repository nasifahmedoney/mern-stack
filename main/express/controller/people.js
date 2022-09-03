const {people} = require('../data');

const getPeople = (req,res)=>{
    res.status(200).json({success:true, data: people})
}

const postPeople = (req,res)=>{
    const {name,id} = req.body;
    if(!name){
        return res.status(400).json({success: false, msg:'name value empty'})
    }
    
    res.status(201).json({success: true, person: [...people,{id,name}]})
}

const putPeople = (req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const person = people.find((person)=>person.id===Number(id))

    if(!person){
       return res.status(404).json({success:false,msg:`${id} not found`})
    } 
    const newPeople = people.map((person)=>{
        if(Number(id)===person.id){
            person.name = name;
        }
        return person;
    })
    res.status(200).json({success:true, data:newPeople});
}

const deletePeople = (req,res)=>{
    const person = people.find((person)=>person.id===Number(req.params.id))

    if(!person){
       return res.status(404).json({success:false,msg:`${req.params.id} not found`})
    }

    const newPeople = people.filter((user)=>user.id !== Number(req.params.id))

    return res.status(200).json({success:true,data:newPeople})
}

module.exports = {
    getPeople,
    postPeople,
    putPeople,
    deletePeople
}