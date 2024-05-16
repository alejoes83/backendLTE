//exportamos nuestro modelo
const Cliente = require('../models/cliente');

//funcion agregar cleintes

exports.agregarClientes = async(req,res) => {
    try {
        let clientes =new Cliente(req.body)
        await clientes.save();
        res.send(clientes);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al  agregar un cliente')
    }
}


//mostar clientes

exports.mostrarClientes = async(req,res) => {
    try {

        const clientes = await Cliente.find();
        res.json({clientes});
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al  buscar un cliente') 
    }
}


//mostrar cliente

exports.mostrarUnCliente = async(req, res) => {
    try {
        let clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).json({msg: "no se encuentra el cliente con ese ID"});
        }
        res.send(clientes);
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al  buscar un cliente en la web');

    }
}

//funcion eliminar clientes

exports.eliminarClientes = async(req, res)=> {

    try {
        
        let clientes = await Cliente.findById(req.params.id);

        if(!clientes){
            res.status(404).json({msg: "el cliente no existe"});
            return
        }

        await Cliente.findOneAndDelete ({_id: req.params.id});
        res.json({msg:"el cliente fue eliminado"});

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar un cliente de la base de datos');
        
    }
}

exports.modificarCliente = async(req, res)=>{

    try {
        let cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!cliente){
            return res.status(404).send('cliente no encontrado');
            
        }
        res.json(cliente)
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al modificar el cliente');
    }
}

exports.actualizarCliente = async(req, res)=>{

    try {
        
        const {nombres, apellidos, documento, correo, telefono, direccion} = req.body
        let cliente = await Cliente.findById(re.params.id);

        if(!cliente){
            res.status(404).send('cliente no encontrado');
            return

        }
            cliente.nombres = nombres;
            cliente.apellidos = apellidos;
            cliente.documento = documento;
            cliente.correo = correo;
            cliente.telefono = telefono;
            cliente.direccion= direccion;

            cliente= await Cliente.findOneAndUpdate({_id: req.params.id}, cliente,{new:true});
            res.json(cliente);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al modificar el cliente');
        
    }

};

exports.ActualizarCliente = async(req, res)=> {
    try {
        let cliente = await Cliente.findOneAndDelete(
            {_id: req.params.id }, req.body);

            if(!cliente) res.status(404).send('cliente no encontrado');
            else
            res.json(cliente);
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al modificar el cliente'); 
    }
}
