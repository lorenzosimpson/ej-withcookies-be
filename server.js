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
const sessionConfiguration = {
    name: 'sandy',
    secret: process.env.SECRET || 'sandy is a fat cat',
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: false,
    },
    resave: false,
    saveUninitialized: true,
    store: new KnexSessionStorage({
        knex: knexConnection,
        clearInterval: 1000 * 60 * 10, // delete expired sessions every 10 minutes
        tablename: "user_sessions",
        sidfieldname: "id",
        createtable: true
    })
}
server.use(session(sessionConfiguration))
server.use('/api', apiRouter)



module.exports = server;