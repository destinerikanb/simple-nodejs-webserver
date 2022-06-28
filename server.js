const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS')

    const {method, url} = request;

    if(url === '/'){
        if(method === 'GET'){
            response.statusCode = 200;
            // response.end('<h1>This is homepage</h1>')
            response.end(JSON.stringify({
                message : 'This is homepage',
            }))
        } else {
            response.statusCode = 400;
            // response.end(`<h1>This page can't be accessed using ${method} request</h1>`)
            response.end(JSON.stringify({
                message : `This page can't be accessed using ${method} request`,
            }))
        }
    }

    else if(url === '/about') {
        if(method === 'GET') {
            response.statusCode = 200;
            // response.end('<h1>Hello! This is page about</h1>')
            response.end(JSON.stringify({
                message : 'Hello! This is page about',
            }))
        } else if(method === 'POST') {
            let body = [];
            request.on('data', (chunk)=>{
                body.push(chunk)
            })
            request.on('end', ()=>{
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body)
                response.statusCode = 200;
                // response.end(`<h1>Hello, ${name}! This is page about</h1>`)
                response.end(JSON.stringify({
                    message : `Hello, ${name}! This is page about`,
                }))
            })
        } else {
                response.statusCode = 400;
                // response.end(`<h1>This page can't be accessed using ${method} request</h1>`)
                response.end(JSON.stringify({
                    message : `This page can't be accessed using ${method} request`,
                }))
        }
    } else {
        response.statusCode = 404;
        // response.end('<h1>Page not found</h1>')
        //Menuliskan data JSON pada response body
        //Karena response.end() menerima string(buffer) maka kita perlu mengubah objek JavaScript menjadi JSON string
        //menggunakan JSON.stringify
        response.end(JSON.stringify({
            message : 'Page not found',
        }))
    } 
}

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';


server.listen(port, host, ()=>{
    console.log(`Server is running on http://${host}:${port}`);
})