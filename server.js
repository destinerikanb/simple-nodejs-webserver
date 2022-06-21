const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
    response.end('<h1>Hello, This is HTTP Server!</h1>')
}

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, ()=>{
    console.log(`Server is running on http://${host}:${port}`);
})