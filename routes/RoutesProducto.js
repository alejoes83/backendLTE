const express = require ('express');
const router = express.Router();
const ProductoController = require ('../controllers/ProductoController');

//aca van las rutas del crud
router.post('/', ProductoController.agregarProducto);
router.get('/', ProductoController.mostrarProductos);
router.get('/:id', ProductoController.mostrarUnProducto);
router.delete('/:id', ProductoController.eliminarProductos);
router.patch('/:id', ProductoController.modificarProducto);


module.exports = router;