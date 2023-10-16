const path = require("path");

// Base file name
console.log(path.basename(__filename));
// path_demo.js

//Directory  name
console.log(path.dirname(__filename));
//C:\Users\HP\Desktop\node.js\reference

//File extension
console.log(path.extname(__filename));
// .js

// Creat path object
console.log(path.parse(__filename).base);
//path_demo.js

//Concatinate paths
console.log(path.join(__dirname, "test", "hello.html"));
//C:\Users\HP\Desktop\node.js\reference\test\hello.html
