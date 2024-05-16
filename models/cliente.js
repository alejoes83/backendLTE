const mongoose = require ('mongoose');

//este modelo debesr igual al modelo de la db

const clienteSchema= mongoose.Schema({

nombres: {
    type: String,
    required: true
},
apellidos: {
    type: String,
    required: true
},
cedula: {
    type: Number,
    required: true
},
correo: {
    type: String,
    required: true
},
telefono: {
    type: Number,
    required: true
},
direccion: {
    type: String,
    required: true
},

},{versionkey: false});

module.exports = mongoose.model('Cliente', clienteSchema);
