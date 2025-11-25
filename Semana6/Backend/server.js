const express = require('express');
const bodyParser = require('body-parser');

let parser = bodyParser.urlencoded({extended:true});

const app = express()
const port = 3001;

app.use(parser);

/*
callback:  funcion que se ejecuta automaticamente al final de un proceso async
*/
app.listen(port,()=>{
    console.log("el servidor se esta ejecutando en el puerto, ", port)
});
console.log("Esta linea esta luego del app.listen");

/*
METODOS HTTP 
    CRUDS
    POST -> CREATE 
    GET- > READ 
    PUT-> UPDATE
    DELETE -> DELETE 
*/

/*
    comunicación
    client server 
    1) BE tiene el contorl absoluto 
     a) Establece como vamos a realizar las peticiones
     b) Establece como nos va a responder 
     c) Establece a QUIEN le va a responder 
     d) Establece QUE va a responder 
     e) BE como interpretar los errores/ que es un error 
*/

/*
    Terminos importantes: 
    - Ruta: una direccion a la cual se envia la solicitud 
            esta es definida por el BE 
    - Payload: información que se envia en la solicitud
    - Endpoint: es la combinación entre la ruta y el metodo HTTP
*/
// request  response 
 app.get('/saludar', (req,res)=>{
        console.log("Solicitud entrante....!");
        // console.log("request ", req);
        // console.log("response ", res)
        res.status(200).send({
            solicitud: "aceptada",
            mensaje: "Hola desde el servidor!!!!!!",
            otraInfo: "......."
        });
 });

 //informacion por body 
 app.post('/login', (req,res)=>{
    const {user,password} = req.body;

   console.log(req.body);
   console.log("user", req.body.user)
   console.log("password", req.body.Password)
   

    res.status(200).send({
        resultado: "Exitoso"
    });
 });

 app.put('/actualizar/:dni',(req,res)=>{
    let dni = req.params.dni
    console.log("DNI ", dni);
    res.status(200).send({
        resultado: "Exitoso"
    });
 });

