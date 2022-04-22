const express = require('express');
const app = express();

// Importa a função sync do sequelize
const conn = require('./db/conn.js');

// Importar rotas
const routes = require('./routes.js');
const PORT = process.env.PORT || 5000;

// Configuração JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/popular-saying', routes);

// Faz a conexão com o banco de dados
conn.sync()
	.then(app.listen(PORT, () => console.log(`Open on port ${PORT}!`)))
	.catch(error => console.error(error));
