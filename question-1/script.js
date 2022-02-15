/**
 * On this module you should write your answer to question #1.
 * This file would be executed with the following command (N=100):
 * $ node scritp.js 100
 */

const args = process.argv.slice(-1);
console.log(`Running question #1 with args ${args}`)

function Nsteps (f){
    if(f===1) return 1
    if(f===2) return 2
    return Nsteps(f-2) + Nsteps(f-1)
}

let result= Nsteps(args)+ " formas"

var fs = require('fs');

var filepath = "output.txt";

fs.writeFile(filepath, result.toString(), (err) => {
    if (err) throw err;
}); 
