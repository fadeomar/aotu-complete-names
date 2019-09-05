const filter = require('./helper');

const find = (req, res) => {
    let data = '';
    req.on('data', chunk => {
        data += chunk;
    });
    console.log(data)
    req.on('end', () => {
        res.writeHead(200, {'Content-Type':'Application/json'});
        res.end(JSON.stringify(filter(data)))
    })
};

module.exports = find;