const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initializeApp } = require("firebase/app");
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } = require("firebase/auth");

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

let parser = bodyParser.urlencoded({ extended: true });
const uri = "mongodb+srv://claseux2025:Password1!@uxq52025.iifco7f.mongodb.net/?appName=uxq52025";



const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const firebaseConfig = {
    apiKey: "AIzaSyANfGoaMujjHFWOM5kG14AGvaNTmJHj1AY",
    authDomain: "uxq4-2025.firebaseapp.com",
    projectId: "uxq4-2025",
    storageBucket: "uxq4-2025.firebasestorage.app",
    messagingSenderId: "588111523070",
    appId: "1:588111523070:web:041188d9b3a748d89649af",
    measurementId: "G-N62VYJ0KKY"
};

const firebaseApp = initializeApp(firebaseConfig);

let corsConfig = {
    origin: '*'
}
let politicaSeguridadCors = cors(corsConfig)

const app = express()
const port = 3001;

app.use(parser);
app.use(politicaSeguridadCors)


app.listen(port, async () => {
    console.log("el servidor se esta ejecutando en el puerto, ", port)
    // await client.connect();
    // await client.db("ux2025DB").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
});
console.log("Esta linea esta luego del app.listen");

/*

METODOS HTTP 
    CRUDS
    POST -> CREATE 
    GET- > READ 
    PUT-> UPDATE
    DELETE -> DELETE 
    comunicación
    client server 
    1) BE tiene el contorl absoluto 
     a) Establece como vamos a realizar las peticiones
     b) Establece como nos va a responder 
     c) Establece a QUIEN le va a responder 
     d) Establece QUE va a responder 
     e) BE como interpretar los errores/ que es un error 

         Terminos importantes: 
    - Ruta: una direccion a la cual se envia la solicitud 
            esta es definida por el BE 
    - Payload: información que se envia en la solicitud
    - Endpoint: es la combinación entre la ruta y el metodo HTTP
    - callback:  funcion que se ejecuta automaticamente al final de un proceso async
*/

//FIREBASE

app.post('/crearUsuario', async (req, res) => {
    try {
        const auth = getAuth();
        const responseFirebase = await createUserWithEmailAndPassword(auth, req.body.user, req.body.password);

        // const db = client.db("ux2025DB")
        // collection == tabla 
        // const collection = db.collection("usuarios");
        // documento == registro=tupla
        const nuevoUsuario = {
            idFirebase: responseFirebase.user.uid,
            ...req.body
        }

        // const response = await collection.insertOne(nuevoUsuario);

        res.status(201).send({
            mensaje: "Usuario creado",
            // responseMongo: response,
            responseFirebase: responseFirebase
        })

    } catch (e) {
        console.log(e)
        res.status(500).send({
            mensaje: "Lo sentimos algo salio mal, intentelo de nuevo",
            error: e
        })
    }

});

app.get('/traerRegistros', async (req, res) => {
    try {
        const db = client.db("ux2025DB")
        const collection = db.collection("usuarios");
        //select * from usuarios
        const resposne = await collection.find({}).toArray();
        res.status(200).send({
            mensaje: "ELEMENTOS ENCONTRADOS",
            usuarios: resposne
        });
    } catch (e) {
        console.log(e)
        res.status(500).send({
            mensaje: "Lo sentimos algo salio mal, intentelo de nuevo",
            error: e
        })
    }

});

app.put('/actualizar/:username', async (req, res) => {
    let userNameUpdate = req.params.username
    try {
        const db = client.db("ux2025DB")
        const collection = db.collection("usuarios");
        const filter = {
            userName: userNameUpdate,
        }

        const updateDocument = {
            $set: {
                password: req.body.newPassword,
                upgradePerfil: true,
            }
        }

        const response = await collection.updateOne(filter, updateDocument);

        res.status(203).send({
            resultado: "Registro actualizado con exito",
            response: response,
        });

    } catch (error) {
        console.log(e)
        res.status(500).send({
            mensaje: "Lo sentimos algo salio mal, intentelo de nuevo",
            error: e
        })
    }

});


app.delete('/eliminar/:id', async (req, res) => {
    try {
        const db = client.db("ux2025DB")
        const collection = db.collection("usuarios");
        const filter = {
            _id: new ObjectId(req.params.id),
        }
        const response = await collection.deleteOne(filter);

        if (response.deletedCount == 0) {
            res.status(200).send({
                resultado: "No existen registros con ese id ",
                response: response,
            });
        } else {
            res.status(200).send({
                resultado: "Registro Eliminado ",
                response: response,
            });
        }

    } catch (error) {
        console.log(e)
        res.status(500).send({
            mensaje: "Lo sentimos algo salio mal, intentelo de nuevo",
            error: e
        })
    }
})


//informacion por body 
app.post('/login', async (req, res) => {
    try {
        const { user, password } = req.body;
        const auth = getAuth();
        const response = await signInWithEmailAndPassword(auth, user, password);
        res.status(200).send({
            resultado: response,
        });

    } catch (error) {
        res.status(500).send({
            resultado: error,
            mensaje: "ocurrio un error"
        });
    }
});



//informacion por body 
app.post('/logout', async (req, res) => {
    try {
        const auth = getAuth();
        const response = await signOut(auth);
        res.status(200).send({
            mensaje: "gracias por su visita, ",
            resultado: response,
        });

    } catch (error) {
        res.status(500).send({
            resultado: error,
            mensaje: "ocurrio un error"
        });
    }
});




