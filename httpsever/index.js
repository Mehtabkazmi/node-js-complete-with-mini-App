const fs = require('fs');
const http = require('http');
const server = http.createServer((req, res) => {
    // console.log(req.url);
    const data = fs.readFileSync(`${__dirname}/jsonapi/jsonapi.json`, "utf-8");
    const objdata = JSON.parse(data);
        if (req.url == "/") {
        res.end('My Home page');
    }
    else if (req.url == "/contact") {
        res.end('My contact page');
    }
    else if (req.url == "/about") {
        res.end('My About page');
    }
    else if (req.url == "/jsonapi") {
            res.writeHead(200, { "content-type": "application/json" });
            res.end(objdata[0].name);  
    }
    else {res.writeHead(404,{"content-type": "text/html"});
        res.end("<h1>404 error </h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log('listening to the 8000 port')
})