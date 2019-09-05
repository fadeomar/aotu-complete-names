const {files, find, home} = require('./handlers');

const router = (req, res) => {
    const endpoint = req.url;

    const path = endpoint.split('/');

    if(endpoint === '/'){
        home(req,res)
    }else if(endpoint.includes('public')){
        files(req, res, endpoint, path);
    }else if(endpoint === '/name'){
        console.log(req)
        find(req, res);
    }else{
        res.writeHead(404, {'Content-Type':'text/html'})
        res.end('<h1>page not found 404</h1>')
    }
}

module.exports = router;