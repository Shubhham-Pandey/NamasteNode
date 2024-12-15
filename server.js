const obj = require('./script');
const data = require('./data.json');

const config = JSON.stringify(data, null, 2);
console.log(JSON.parse(config));
console.log("This is server.js file");
const name = "aditya";
console.log("Name from server", name);
console.log("Name from script file",obj.name);
obj.runs();

