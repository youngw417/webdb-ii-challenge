const express = require('express');
const CarsRouter = require('./routers/CarsRouter');

const server = express();

server.use(express.json());

server.use('/api', CarsRouter);

server.get('/', (req, res) => {
    res.status(200).send('welcome to my Car Dealer');
})

server.use( (err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        error: "Something is Wrong. Please check and Try again"
    })
})


module.exports = server;
