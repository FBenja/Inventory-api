const express = require ('express');
const router = express.Router();
const ModelArt = require('../models/articuloModel');

//traer listado de libros
router.get("/articulos", async (req, res) =>{
    try {
        const articulos = await ModelArt.find();
        res.status(200).send(articulos);
    } catch (error) {
        res.status(500).send({mensaje: 'Error al obtener Articulos!', error});
    }
})

//traer un libro

router.get("/articulos/:id", async (req, res) =>{
    try {
        const articulo = await ModelArt.findById(req.params.id);  
        if (!articulo) {
            return res.status(404).send({mensaje: 'El Articulo no existe'});
        }
        res.status(200).send(articulo);
    } catch (error) {
        res.status(500).send({mensaje: 'error al obtener el articulo!', error});
    }
})

//agregar Articulo

router.post("/articulos", async (req, res) =>{
    const body = req.body;
    try {
        const nvoArticulo = await ModelArt.create(body);
        res.status(201).send(nvoArticulo);
    } catch (error) {
        res.status(400).send({mensaje: 'Error al agregar el Articulo!', error});
    }
})

// modificar articulo

router.put("/articulos/:id", async (req, res) =>{
    try {
        const artActualizado = await ModelArt.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if (!artActualizado) {
            return res.status(404).send({mensaje: 'Error el Articulo no se encuentra!', error});
        }
        res.status(200).send(artActualizado);

    } catch (error) {
        res.status(400).send({mensaje: 'error al actualizar el articulo', error});
    }
})

// Eliminar articulo

router.delete("/articulos/:id", async (req, res) =>{
    try {
        const artEliminado = await ModelArt.findByIdAndDelete(req.params.id)
        if (!artEliminado) {
            return res.status(404).send({mensaje: 'Error el Articulo no se encuentra!', error});
        }
        res.status(200).send({mensaje: 'Articulo Eliminado'});

    } catch (error) {
        res.status(500).send({mensaje: 'error al eliminar el articulo', error});
    }
});

module.exports = router;