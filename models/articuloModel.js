const mongoose = require ('mongoose');

// Estructura de DB Articulos

const artSchema = new mongoose.Schema(
    {
        nombre: { type : String, require : true },
        marca: {type : String, require : true },
        descripcion: { type : String, require : true },
        cantidad: { type: Number, require: true },
        precio: { type : Number,  require : true }
    },
    {
        timestamp: true, //agrega fecha modif 
    }
);

const ModelArt = mongoose.model("Articulo", artSchema);
module.exports = ModelArt;

