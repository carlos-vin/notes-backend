const express = require('express');
// const userRoutes = require('./routes/userRoutes'); // Você vai criar depois

const app = express();

// Middleware para o Express entender JSON no corpo (body) das requisições
app.use(express.json());

// Rota de teste para ver se está funcionando
app.get('/', (req, res) => {
  res.json({ message: 'API rodando em camadas!' });
});

// Aqui você plugará suas rotas futuramente:
// app.use('/api', userRoutes);

module.exports = app;