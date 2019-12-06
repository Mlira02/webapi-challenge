const express = require('express');
const server = express();

const actionRouter = require('./routers/actionRouter');
const projectRouter = require('./routers/projectRouter');


server.use(express.json());
server.use('/actions', actionRouter);
server.use('/projects', projectRouter);

module.exports = server;