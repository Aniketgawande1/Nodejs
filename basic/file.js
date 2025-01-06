const fs = require("fs");
const os = require("os")
//sync
 console.log(os.cpus().length)

fs.writeFileSync('./test.txt',"Hey There");

// fs.writeFileSync('./text.txt',"AG" );


// difference between in sync and non sync is the sync fun is not require the error callback in the fun ;

const result = fs.readFileSync("./contact.txt", "utf-8");
console.log(result); 

