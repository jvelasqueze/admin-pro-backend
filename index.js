require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear el servidor Express
const app = express();

// Configurar CORS
app.use(cors());

// Base de Datos
dbConnection();


// Rutas
app.get( '/', (req, res) => {

        res.status(200).json({
            ok: true,
            msg: 'Hola Mundo '

        });


})

app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT );

});

