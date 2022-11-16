//#configuracion del servidor
const express= require('express');
const app = express()
var LibrosController = require('./routes/libros')

//Se pasa todos los libros a esta vista
app.get("/api",LibrosController);



app.listen(5000,()=>{
    console.log("server started on port 5000");
})