const express = require ('express');
const router = express.Router();
const ClienteController = require ('../controllers/clienteController');

//aca van las rutas del crud
router.post('/', ClienteController.agregarClientes);
router.get('/', ClienteController.mostrarClientes);
router.get('/:id', ClienteController.mostrarUnCliente);
router.delete('/:id', ClienteController.eliminarClientes);
//router.patch('/:id', ClienteController.modificarCliente);
router.put('/:id', ClienteController.actualizarCliente);
//router.put('/:id', ClienteController.ActualizarCliente);

module.exports = router;