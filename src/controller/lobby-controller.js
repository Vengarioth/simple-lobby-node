const Lobby = require('../lobby/lobby');

class LobbyController {

    constructor(lobbyRepository, createId) {
        this._lobbyRepository = lobbyRepository;
        this._createId = createId;
    }

    createLobby(name, callback) {
        const id = this._createId();
        const lobby = new Lobby(id, name);

        this._lobbyRepository.addLobby(lobby, (error, ok) => {
            if(error) {
                callback(error);
                return;
            }

            callback(null, lobby);
        });
    }

    findLobbyById(id, callback) {
        this._lobbyRepository.findLobbyById(id, (error, lobby) => {
            if(error) {
                callback(error);
                return;
            }

            callback(null, lobby);
        });
    }

    updateLobby(id, data, callback) {
        this._lobbyRepository.findLobbyById(id, (error, lobby) => {
            if(error) {
                callback(error);
                return;
            }

            // TODO

            this._lobbyRepository.updateLobby(lobby, (error, ok) => {
                if(error) {
                    callback(error);
                    return;
                }

                callback(null, lobby);
            });
        });
    }

}

module.exports = LobbyController;
