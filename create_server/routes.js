const fs = require('fs');
//console.log(req.url, req.method, req.headers);
const requestHandler = (req, res) => {
const url = req.url;
const method = req.method;
if(url === '/'){
   res.setHeader('Content-Type', 'text/html');
   res.write('<html>');
   res.write('<head><title>Form page</title></head>');
   res.write('<body><form action="/message" method="POST"><input type="text" name="message" value=""/><button type="submit">Send</button></form></body>');
   res.write('</html>');
  return res.end(); // end the response
}

if(url === '/message' && method === 'POST'){
 const body = [];
 req.on('data',(chunk)=>{
   console.log(chunk);
   body.push(chunk);
 })
return req.on('end',()=>{
   const parseBody = Buffer.concat(body).toString();
   console.log(parseBody);
   const message = parseBody.split('=')[1];
   console.log(message);
  // fs.writeFileSync('message.txt', message); //writeFileSync is synchronous
   fs.writeFile('message.txt', message, (err)=>{
   res.statusCode = 302;
   res.setHeader('Location', '/');
 return res.end();
   }); //writeFile is asynchronous
 })
}
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>My First Page</title></head>');
res.write('<body><h1>Hello from my Node.js Server1!</h1></body>');
res.write('</html>');
res.end(); // end the response
// process.exit();
}
module.exports = requestHandler;