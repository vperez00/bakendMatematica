//Aqui recogi todo el codigo que hice de la 5ta practica de express para ir de acuerdo al curso con la practica

const express = require('express');
const app = express();
const {infoCursos} = require('../datos/cursos.js');

const routerMatematicas = require('./router-matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas);

// routers
const routerProgramacion = require('./router-programacion.js');
app.use('/api/cursos/programacion', routerProgramacion);




//routing
app.get('/', (req, res) => {
    res.end('Mi primer servidor con express. cursos');
});

app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});

//MATEMATICAS  

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el ${PUERTO}...`);
});