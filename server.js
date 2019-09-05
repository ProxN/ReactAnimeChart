const  express  = require('express');
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express();

    server.get('/a/:name',(req,res) => {
        app.render(req,res,'/anime',{name:req.params.name});
    });
    server.get('/' ,(req,res) =>{
        app.render(req,res,'/anime',{name:'SUMMER'});
    })
    server.get('*',(req,res) =>{

        return handle(req,res);

    });
    server.listen(3004, err => {
        if(err) throw err;
        console.log('server started on port 3004');
    })
})