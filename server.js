const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    const {method} = request;

    if(method === 'GET'){
        response.end('<h1>Hello, this is GET method response!</h1>')
    }
    if(method === 'POST'){
        response.end('<h1>Hi, this is POST method response!</h1>')
    }
    if(method === 'PUT'){
        response.end('<h1>Bonjour, this is PUT method response!</h1>')
    }
    if(method === 'DELETE'){
        response.end('<h1>Salam, this is DELETE method response!</h1>')
    }
}

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';


server.listen(port, host, ()=>{
    console.log(`Server is running on http://${host}:${port}`);
})