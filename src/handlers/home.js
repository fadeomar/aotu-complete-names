const {join} = require('path');
const {readFile} = require('fs');

const home = (req, res) => {
    const filePath = join(__dirname, '..', '..','public', 'index.html');
    readFile(filePath, (err, data) => {
        if(err){
            res.writeHead(500, {'Content-Type':'text/html'})
            res.end('<h1>server error</h1>')
        }else {
            res.writeHead(200, {'Content-Type':'text/html'})
            res.end(data); 
        }
    })
}

module.exports = home;