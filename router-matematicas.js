// Distintos routers en distintos archivos para mejor manejo  aqui tenemos el de matematicas
const express = require('express');

const {matematicas} = require('../datos/cursos.js').infoCursos;

const routerMatematicas = express.Router();

app.use('/api/.cursos/matematicas', routerMatematicas);

routerMatematicas.get('/', (req, res) => {
    res.send(JSON.stringify(infoCursos.matematicas));
});

routerMatematicas.get('/:tema', (req, res) => {
    const tema = req.params.tema;
    const resultados = matematicas.filter(curso => curso.tema === tema);

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${tema}.`);
    }
    res.send(JSON.stringify(resultados));
});

module.exports.routerMatematicas = routerMatematicas;