//exportamos nuestro modelo
const Producto = require('../models/Producto');
const Cliente = require('../models/Producto');

//funcion agregar cleintes

exports.agregarProducto = async(req,res) => {
    try {
        let productos =new Producto(req.body)
        await productos.save();
        res.send(productos);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al  agregar un producto')
    }
}

//funcion para mostar clientes

exports.mostrarProductos = async(req,res) => {
    try {

        const productos = await Producto.find();
        res.json(productos);
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al  buscar los productos') 
    }
}

//funcion para mostrar un cliente

exports.mostrarUnProducto = async(req, res) => {
    try {
        let productos = await Producto.findById(req.params.id);
        if(!productos){
            res.status(404).json({msg: "no se encuentra el producto con ese ID"});
        }
        res.send(productos);
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al  buscar el producto ');

    }
}

//funcion eliminar productos

exports.eliminarProductos = async(req, res)=> {

    try {
        
        let productos = await Producto.findById(req.params.id);

        if(!productos){
            res.status(404).json({msg: "el producto no existe"});
            return
        }

        await Producto.findOneAndDelete ({_id: req.params.id});
        res.json({msg:"el Producto fue eliminado exitosamente"});

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar el producto de la base de datos');
        
    }
}

//funcion para modificar el cliente
exports.modificarProducto = async(req, res)=>{

    try {
        let producto = await Producto.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!producto){
            return res.status(404).send('producto no encontrado');
            
        }
        res.json(producto)
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al modificar el producto');
    }
}