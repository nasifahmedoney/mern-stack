const {readFile,writeFile} = require('fs').promises;

//recomended approach
const start = async()=>{
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        await writeFile(
            './content/newFile.txt',//filepath
            `this will be written in this file ${first}`,//content to write inside the file
            {flag: 'a'} // append on re-run if the file and content already exists
        )
        console.log(first);
    } catch (error) {
        console.log(error)
    }
}

start();