const http = require('http');
const path = require('path');

const fs = require('fs');
const { parse } = require('path');

const server = http.createServer((res, req) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // const filePath = fs.readFileSync(__dirname + "/index.html");
    const HtmlPath = path.join(__dirname + "/index.html");
    const htmlContent = fs.readFileSync(HtmlPath);
   
// const htmlContent = fs.readFileSync(filePath);

    res.end(htmlContent);
});

server.listen(6000, () => {
    console.log("listening on port 6000");

})