const express = require('express');
// const knex = require('knex');

// const knexConfig = require('../knexfile.js');

// const db = knex(knexConfig.development);

// const db = knex({
//     client: 'sqlite3',
//     connection: {
//         filename: ''
//     },
//     useNullAsDefault: true
// });

const router = express.Router();

router.get('/', (req, res) => {
    res.send('yayyyy')
})