const {join} = require('path');

const {readFile} = require('fs');

const files = (req, res, endpoint, path) => {
    const ext = endpoint.split('.')[1];
    
    const extType = {
        html: 'text/html',
        css: 'text/css',
        jpg: 'image/jpg',
        ico: 'image/x-icon',
        png: 'image/png',
        js: 'application/javascript',
      };

    const filePath = join(__dirname,'..','..',...path);
    readFile(filePath, (err, data) => {
        if(err){
            res.writeHead(500,{'Content-Type':'text/html'})
            res.end(`<h1>server Error</h1>`)
        }else{
            res.writeHead(200, {'Content-Type':extType[ext]})
            res.write(data);
            res.end();
        }
    })
}

module.exports = files;