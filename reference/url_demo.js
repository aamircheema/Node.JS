const url = require("url");

const myUrl = new URL(
  "http://mywebsite.com:800/hello.html?id=100&status=acrive"
);

// Serialized URL
console.log(myUrl.href);
// http://mywebsite.com:800/hello.html?id=100&status=acrive

// Host (root domain)
console.log(myUrl.host);
// mywebsite.com:800

// Hostname (does not get port)
console.log(myUrl.hostname);
//mywebsite.com

// Pathname
console.log(myUrl.pathname);
///hello.html

// Serialized query
console.log(myUrl.search);
//?id=100&status=acrive

// Param object
console.log(myUrl.searchParams);
// URLSearchParams { 'id' => '100', 'status' => 'acrive'

// Add param
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);
//URLSearchParams { 'id' => '100', 'status' => 'acrive', 'abc' => '123' }

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
// id: 100
// status: acrive;
// abc: 123;
