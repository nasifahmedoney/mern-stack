const {readFileSync,writeFileSync} = require('fs');

// read from a file
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

//console.log(first,'\n',second);

//creates the file if does not exist
//overwrites everything in the file
writeFileSync(
    './content/newFile.txt',
    `Write this in the file ${first} \n ${second}`
)