const express = require('express');
const router = express.Router();
const ModelArt = require('../models/articuloModel');

//Getear articulos segun filtro de busqueda (marca,precio y nombre)
router.get('/articulos/negocio/busqueda', async (req, res) => {
    const { marca, precio, nombre } = req.query

    try {

        const query = {}
        if (marca) {query.marca = marca};

        if (precio) {query.precio = precio};

        if (nombre) {query.nombre = nombre};

        const articulos = await ModelArt.find(query)
        if (!articulos.length) {
            return res.status(404).json({ message: "No se encontraron articulos" })
        }

        res.status(200).send(articulos)

    }catch{
        res.status(500).send({ mensaje: "error al obtener articulos" })
    }
})

//Getear un atributo del articulo mediante el id y query (?atributo=marca,precio,cantidad,etc)
router.get('/articulos/stock/:id', async (req, res) => {
    const id = req.params.id;
    const atributo = req.query.atributo; 

    try {
        
        const articulo = await ModelArt.findById(id);

        if (articulo) {
            if (atributo && articulo[atributo] !== undefined) {
                res.json({ [atributo]: articulo[atributo] }); // 
            } else {
                res.status(400).send('Atributo no encontrado o inválido');
            }
        } else {
            res.status(404).send('Articulo no encontrado');
        }
    } catch (error) {
        res.status(500).send({ mensaje: "Error al obtener el artículo", error: error.message });
    }
});


module.exports = router;