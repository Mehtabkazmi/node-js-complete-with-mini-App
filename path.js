const path = require("path");

console.log(path.dirname("E:/nodejs/path.js"));
console.log(path.extname("E:/nodejs/path.js"));
console.log(path.basename("E:/nodejs/path.js"));
console.log(path.parse("E:/nodejs/path.js"));

const mypath = path.parse("E:/nodejs/path.js");
console.log(mypath.name);
