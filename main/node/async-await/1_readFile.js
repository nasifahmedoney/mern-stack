// const { rejects } = require('assert');
const {readFile} = require('fs');
// const { resolve } = require('path');


//'./content/first.txt'
//promises
const getText = (path) =>{
    return new Promise((resolve,reject)=>{
        readFile(path, 'utf8',(err,result)=>{
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(result);
            }
        })
    })
} 

/* 
getText('./content/first.txt')
.then(result=>console.log(result))
.catch(err=>console.log(err))
 */
//async function that uses await with a promise function
const start = async()=>{
    try {
        const first = await getText('./content/first.txt')
        console.log(first);
    } catch (error) {
        console.log(error)
    }
}

start();