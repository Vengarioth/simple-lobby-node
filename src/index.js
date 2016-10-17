const config = require('../config.json');
const packageJson = require('../package.json');
const version = packageJson.version;

const uniqid = require('uniqid');

const contracts = require('./contract');
const LobbyRepository = require('./repository/memory-lobby-repository');
const LobbyController = require('./controller/lobby-controller');

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

// setup persistence
const lobbyRepository = new LobbyRepository();

// setup controller
const lobbyController = new LobbyController(lobbyRepository, contracts, () => uniqid('l-'), () => uniqid());

// setup routes
createAppHealthRoute(router, version);
createLobbyRoute(router, lobbyController);

app.use('/api', router);

const server = require('http').Server(app);
server.listen(process.env.PORT || 3000);
