const express = require('express');

// const db = require('./data/dbConfig.js');

const accountRouter = require('./data/accountRouter')

const server = express();


server.use(express.json());
server.use('/api/accounts', accountRouter)



server.get('/', (req, res) => {
    res.send(
        `<p>Let's get started... </p>`);
});
module.exports = server;