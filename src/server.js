const express = require('express');
const routes = require("./routes");
const path = require('path');
const cors = require('cors');
const server = express();

//Settings
server.set('PORT', 4500);
//Middlewares
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false}));
//Routes
server.use('/api/animal', routes.animal);
server.use('/api/diario', routes.diario);
server.use('/api/voluntario', routes.voluntario);
//Static folder
server.use(express.static(path.join(__dirname, 'statics')));

module.exports = server;