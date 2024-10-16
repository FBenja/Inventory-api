const express = require('express');
const app = express();
const dbconnect = require('./config/db');
const artRoutes = require('./routers/articulos');

app.use(express.json());
app.use(artRoutes);

dbconnect().then(() => {
    app.listen('3000', () => {
        console.log('El servidor corre en el puerto 3000');
    });
}).catch(error => {
        console.log('Servidor no iniciado por error en Base de Datos');
    });
