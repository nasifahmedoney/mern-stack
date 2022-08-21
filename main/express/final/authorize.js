const authorize = (req,res,next) =>{
    const {user} = req.query;
    if(user === 'user'){
        //this data can be used from main urls req.queryUser
        req.queryUser = {name:'user',id:1}
        next()
    }
    else{
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize;