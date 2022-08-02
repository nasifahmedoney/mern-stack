const http = require('http');

const server = http.createServer(
   (req,res)=>{
        //console.log(req.url);
        if(req.url === '/')
        {
            res.end('home page');
        }
        else if(req.url === '/about')
        {
            res.end('about page');
        }
        else{
            res.end('no page found');
        }
        
   } 
)

server.listen(5000);