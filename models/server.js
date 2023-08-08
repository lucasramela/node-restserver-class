
const express = require('express');

class Server {

    constructor() {

        this.app = express();

        // Puerto
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        // Rutas de la aplicacion
        this.routes();
    }

    middlewares() {

        // Ruta publica de la aplicacion
        this.app.use(express.static('public'));

    }

    routes() {

        this.app.get('/', (req, res) => {

            res.send('Practicando Node JS');
    
        });

    }

    listen() {

        this.app.listen(this.port, () =>{

            console.log('El servidor esta corriendo en el puerto: ', this.port);
    
        });

    }


}


module.exports = Server;