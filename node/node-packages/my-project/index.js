const emoji = require('node-emoji');
const  http = require('http');

console.log(emoji.get('coffee'));
console.log(emoji.get('heart'));

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.write(`
        <html>
            <head>
                <title>My webpage</title>
            </head>
            <body>
                <h1>My first HTTP server!</h1>
            </body>
        </html>
    `);
    res.end();
});

server.listen(3000);
console.log("Server is now listening on port 3000");