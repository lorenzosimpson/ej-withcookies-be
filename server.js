const express = require('express');
const helmet = require('helmet');
const cors = require('cors')
const session = require('express-session');
const KnexSessionStorage = require('connect-session-knex')(session);
const knexConnection = require('./data/db-config')


const apiRouter = require('./routers/api-router')

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet())
server.use('/api', apiRouter)



module.exports = server;