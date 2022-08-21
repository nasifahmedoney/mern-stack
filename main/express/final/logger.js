const logger = (req,res,next)=>{
    const url = req.url;
    const method = req.method;
    const time = new Date().getFullYear();
    console.log(url, method, time);
    //if the following line is executed the main url will not display anything only res.send('something') will be displayed
    //res.send('something');
    //without next() method main url contents wont load
    next()
}

module.exports = logger;