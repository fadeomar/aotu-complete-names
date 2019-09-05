const http = require('http');

const router = require('../src/router')
const server = http.createServer(router);
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`the server lunched at http://localhost:${port}`)
})