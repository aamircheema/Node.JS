const fs = require("fs");
const path = require("path");

// // Create folder
// // fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
// //   if (err) throw err;
// //   console.log("Folder created");
// // });

// // Create and write to File
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World !",
//   (err) => {
//     if (err) throw err;
//     console.log("File is written too ...");
//     // File Append
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       " I love Node.js",
//       (err) => {
//         if (err) throw err;
//         console.log("File is written too ...");
//       }
//     );
//   }
// );

// // Read file
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloWorld.txt"),
  (err) => {
    if (err) throw err;
    console.log(" File is renamed");
  }
);
