const http = require('http');

const EventEmitter = require('events')

const customEmitter = new EventEmitter();

customEmitter.on('event-name',()=>{
    console.log('event emitted')
});

customEmitter.on('event-name',(id,name)=>{
    console.log(`event emitted with id: ${id} and name: ${name}`)
});

customEmitter.emit('event-name',1,'nasif');
/*
output:
event emitted
event emitted with id: 1 and name: nasif

sequential execution customEmitter.on
 */

//event emitter example 'request' event
const new_server = http.createServer();

new_server.on('request',(req,res)=>{
    res.write('request event emit');
    res.end();
})

new_server.listen(2000);
