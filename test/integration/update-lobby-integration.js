const test = require('ava');
const uniqid = require('uniqid');

const contracts = require('../../src/contract');
const LobbyRepository = require('../../src/repository/memory-lobby-repository');
const LobbyController = require('../../src/controller/lobby-controller');

test.cb('Creates a lobby and updates it', (t) => {
    const lobbyRepository = new LobbyRepository();
    const lobbyController = new LobbyController(lobbyRepository, contracts, () => uniqid('l-'), () => uniqid());

    t.plan(2);
    lobbyController.createLobby('someLobby', (createLobbyError, createdLobbyResponse) => {

        t.ifError(createLobbyError);

        const id = createdLobbyResponse.lobby.id;
        const changeCode = createdLobbyResponse.lobby.changeCode;
        const data = {

        };

        lobbyController.updateLobby(id, data, changeCode, (updateLobbyError) => {

            t.ifError(updateLobbyError);
            t.end();
        });
    });
});

test.cb('Attempt to update a lobby with an invalid error code fails', (t) => {
    const lobbyRepository = new LobbyRepository();
    const lobbyController = new LobbyController(lobbyRepository, contracts, () => uniqid('l-'), () => uniqid());

    t.plan(2);
    lobbyController.createLobby('someLobby', (createLobbyError, createdLobbyResponse) => {

        t.ifError(createLobbyError);

        const id = createdLobbyResponse.lobby.id;
        const changeCode = `someWrongCode-${createdLobbyResponse.lobby.changeCode}`;
        const data = {

        };

        lobbyController.updateLobby(id, data, changeCode, (updateLobbyError) => {

            t.truthy(updateLobbyError);
            t.end();
        });
    });
});
