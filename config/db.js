const mongoose = require ('mongoose');
mongoose.set('strictQuery', false);

const dbconnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/dbStockArticulos");
        console.log ('La conexion a MongoDB fue exitosa');
    } catch (error) {
        console.error ('La conexion no es correcta', error);
        process.exit(1);
    }
};

module.exports = dbconnect; 