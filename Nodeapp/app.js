const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.writeHead(200,{"content-type": "plain/text"});
    res.end("Home page");
    }else if(req.url === "/user/api"){
        const user ={
            id: 1,
            name: "John Doe baba",
            email: "john@example.com"
        }
        // const data = JSON.stringify(user);
        // console.log(JSON.parse(data));
        
        res.writeHead(200,{"content-type": "application/json"});
        res.end(JSON.stringify(user));
    }
    else if(req.url === "/login"){
        res.writeHead(200,{"content-type": "plain/text"});
        res.end("Login successfully");
    } else if(req.url === "/signup"){
        res.writeHead(200,{"content-type": "plain/text"});
        res.end("Signup successfully");
    } else{
        res.writeHead(404,{"content-type": "plain/text"});
        res.end("page not found");
    }
    
})

server.listen(5500, ()=>{
    console.log("listening on port 5500");
    
})