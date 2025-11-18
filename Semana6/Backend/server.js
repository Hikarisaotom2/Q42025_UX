const express = require('express');


const app = express()
const port = 3001;


/*
callback:  funcion que se ejecuta automaticamente al final de un proceso async
*/
app.listen(port,()=>{
    console.log("el servidor se esta ejecutando en el puerto, ", port)
});
console.log("Esta linea esta luego del app.listen");



