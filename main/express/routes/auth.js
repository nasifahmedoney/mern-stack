//login method

const express = require('express')
const router = express.Router();

router.post('/',(req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(404).send('invalid user')    
    }
    res.send(`Hi ${name}`);
    console.log(req.body);
})

module.exports = router;