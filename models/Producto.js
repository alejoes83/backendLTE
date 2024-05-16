const mongoose = require ('mongoose');

//caracterisiticas del producto

const productoSchema= mongoose.Schema({

    producto: {
        type: String,
        required: true
    },
    referencia: {
        type: String,
        required: true
    },
    talla: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    estilo: {
        type: String,
        required: true
    },
},{versionkey: false});

module.exports = mongoose.model('Producto', productoSchema);