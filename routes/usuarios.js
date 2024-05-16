const express = require ("express");
const router = express.Router();
const { check } = require("express-validator");
const usuariosController = require ("../controllers/usuariosController");

//crear uusrios  --api/usuarios

router.post(
    "/", [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("email", "agregue un email valido").isEmail(),
        check("password", "el password debe tener 8 caracteres").isLength({
            min:8,
        }),
    ],
    usuariosController.crearUsuario


);
module.exports = router;
