class MemoryLobbyRepository {

    constructor() {
        this._lobbies = new Map();
    }

    getLobbies(callback) {
        // TODO
        callback(new Error('not implemented'));
    }

    findLobbyById(id, callback) {
        if (!this._lobbies.has(id)) {
            callback(new Error(`No lobby with id "${id}" found.`));
            return;
        }

        callback(null, this._lobbies.get(id));
    }

    findLobbyByName(name, callback) {
        // TODO
        callback(new Error('not implemented'));
    }

    findLobbyByHostName(hostName, callback) {
        // TODO
        callback(new Error('not implemented'));
    }

    addLobby(lobby, callback) {
        if (this._lobbies.has(lobby.id)) {
            callback(new Error(`A lobby with id "${lobby.id}" already exists.`));
        }

        this._lobbies.set(lobby.id, lobby);

        callback(null, true);
    }

    updateLobby(lobby, callback) {
        if (!this._lobbies.has(lobby.id)) {
            callback(new Error(`No lobby with id "${lobby.id}" found.`));
            return;
        }

        this._lobbies.set(lobby.id, lobby);

        callback(null, true);
    }

    removeLobby(lobby, callback) {
        if (!this._lobbies.has(lobby.id)) {
            callback(new Error(`No lobby with id "${lobby.id}" found.`));
            return;
        }

        this._lobbies.delete(lobby.id);

        callback(null, true);
    }

}

module.exports = MemoryLobbyRepository;
