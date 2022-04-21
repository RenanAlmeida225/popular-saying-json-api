const express = require('express');
const app = express();

// Importar routas
const routes = require('./routes.js');
const PORT = process.env.PORT || 5000;

// Configuração JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/popular-saying', routes);

app.listen(PORT, () => console.log(`Open on port ${PORT}!`));
