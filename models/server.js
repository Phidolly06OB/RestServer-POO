const express = require('express');
const cors = require('cors');

class Server{

    constructor(){
        this.app = express();

        this.usuariosPatch = "/api/usuarios"

        this.port = process.env.PORT

        //middlewares
        this.middlewares()

        this.routes() 

    }

    middlewares(){
        //cors
        this.app.use(cors());
        //public derectory
        this.app.use(express.static('public'))

    }

    routes(){
        this.app.use(this.usuariosPatch, require('../routes/usuario.routes.js'));

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`listening on Port: ${this.port}`);
        });
    }

}

module.exports = Server

