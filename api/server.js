const express = require('express');
// const helmet = require('helmet');

const CarsRouter = require('../cars/CarsRouter');

const server = express();

// server.use(helmet());
server.use(express.json());

server.use('/api/cars', CarsRouter);

server.get('/', (req, res) => {
    res.send('Hello!!!')
})

module.exports = server;