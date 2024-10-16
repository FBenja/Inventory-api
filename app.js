const express = require('express');
const app = express();
const dbconnect = require('./config/db');

app.use(express.json());

app.get('/', (req, res) => {  //creand enpoint
    res.send('Servidor funcionando!'); 

});

dbconnect().then(() => {
    app.listen('3000', () => {
        console.log('El servidor corre en el puerto 3000');
    });
}).catch(error => {
        console.log('Servidor no iniciado por error en Base de Datos');
    });
