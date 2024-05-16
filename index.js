const express = require("express");
const conectarBD = require("./config/db");
const cors = require("cors");


// creamos el servidor
const app = express();
// creamos el puerto
const PORT = process.env.PORT || 5000;

//conectar base de datos
conectarBD();
//habilitar cors
app.use(cors());
//habilitamos express json
app.use(express.json({extended: true}));

//creamos rutas
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/clientes", require("./routes/clientes"));
app.use("/api/productos", require("./routes/RoutesProducto"));

//configuracion del servidor
app.listen(PORT, () =>{
    console.log("El servidor esta conectado");
});