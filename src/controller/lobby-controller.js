const Lobby = require('../lobby/lobby');

class LobbyController {

    constructor(lobbyRepository, contracts, createId, createCode) {
        this._lobbyRepository = lobbyRepository;
        this._contracts = contracts;
        this._createId = createId;
        this._createCode = createCode;
    }

    findAllLobbies(callback) {
        this._lobbyRepository.getLobbies((error, lobbies) => {
            if(error) {
                callback(error);
                return;
            }

            callback(null, this._contracts.findAllLobiesResponse(lobbies));
        });
    }

    createLobby(name, callback) {
        const id = this._createId();
        const changeCode = this._createCode();
        const lobby = new Lobby(id, name, changeCode);

        this._lobbyRepository.addLobby(lobby, (error, ok) => {
            if(error) {
                callback(error);
                return;
            }

            callback(null, this._contracts.createLobbyResponse(lobby));
        });
    }

    findLobby(id, callback) {
        this._lobbyRepository.findLobbyById(id, (error, lobby) => {
            if(error) {
                callback(error);
                return;
            }

            callback(null, this._contracts.findLobbyResponse(lobby));
        });
    }

    updateLobby(id, data, changeCode, callback) {
        this._lobbyRepository.findLobbyById(id, (error, lobby) => {
            if(error) {
                callback(error);
                return;
            }

            if(lobby.changeCode !== changeCode) {
                callback(new Error('Wrong change code'));
                return;
            }

            // TODO

            this._lobbyRepository.updateLobby(lobby, (error) => {
                if(error) {
                    callback(error);
                    return;
                }

                callback(null);
            });
        });
    }

    closeLobby(id, changeCode, callback) {
        this._lobbyRepository.findLobbyById(id, (error, lobby) => {
            if(error) {
                callback(error);
                return;
            }

            if(lobby.changeCode !== changeCode) {
                callback(new Error('Wrong change code'));
                return;
            }

            this._lobbyRepository.removeLobby(id, (error) => {
                if(error) {
                    callback(error);
                    return;
                }

                callback(null);
            });
        });
    }

}

module.exports = LobbyController;
