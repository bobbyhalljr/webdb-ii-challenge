const express = require('express');
const knex = require('knex');

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(err => {
        console.log(err.response)
        res.status(500).json({
            errorMessage: 'Error getting cars.'
        })
    })
})

// POST
router.post('/', (req, res) => {
    const carData = req.body;
    db('cars')
    .insert(carData)
    .then(car => {
        res.status(200).json(car)
    })
    .catch(err => {
        console.log(err.response)
    })

}) 

module.exports = router;