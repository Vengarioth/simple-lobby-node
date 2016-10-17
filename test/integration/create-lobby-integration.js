const test = require('ava');
const uniqid = require('uniqid');

const contracts = require('../../src/contract');
const LobbyRepository = require('../../src/repository/memory-lobby-repository');
const LobbyController = require('../../src/controller/lobby-controller');

test.cb('Creates a lobby and finds it again', (t) => {
    const lobbyRepository = new LobbyRepository();
    const lobbyController = new LobbyController(lobbyRepository, contracts, () => uniqid('l-'), () => uniqid());

    t.plan(3);
    lobbyController.createLobby('someLobby', (createLobbyError, createdLobbyResponse) => {

        t.ifError(createLobbyError);

        const id = createdLobbyResponse.lobby.id;

        lobbyController.findLobby(id, (findLobbyError, findLobbyResponse) => {

            t.ifError(findLobbyError);

            t.is(createdLobbyResponse.lobby.id, findLobbyResponse.lobby.id);
            t.end();
        });
    });
});
