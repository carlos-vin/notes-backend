const express = require('express');
const noteRoutes = require('./routes/noteRoutes'); // Importa as rotas de notas

const app = express();

app.use(express.json());

// Pluga as rotas na nossa aplicação
app.use(noteRoutes);

module.exports = app;