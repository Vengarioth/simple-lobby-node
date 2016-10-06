const packageJson = require('../package.json');
const version = packageJson.version;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
app.use(bodyParser.json({
    extended: true
}));

// load routes
const createAppHealthRoute = require('./route/app-health');
const createLobbyRoute = require('./route/lobby');

// setup routes
createAppHealthRoute(router, version);
createLobbyRoute(router);

app.use('/api', router);

const server = require('http').Server(app);
server.listen(process.env.PORT || 3000);
