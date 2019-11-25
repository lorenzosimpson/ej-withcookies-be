const express = require('express');
const helmet = require('helmet');
const cors = require('cors')

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet())

server.get('/api', (req, res) => {
    res.send('API up!')
})

module.exports = server;