class MemoryLobbyRepository {

    constructor() {
        this._lobbies = new Map();
    }

    getLobbies(callback) {
        const lobbies = Array.from(this._lobbies.entries()).map(entry => entry[1]);
        callback(null, lobbies);
    }

    findLobbyById(id, callback) {
        if (!this._lobbies.has(id)) {
            callback(new Error(`No lobby with id "${id}" found.`));
            return;
        }

        // assure async execution
        setTimeout(() => callback(null, this._lobbies.get(id)), 1);
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

        // assure async execution
        setTimeout(() => callback(null, true), 1);
    }

    updateLobby(lobby, callback) {
        if (!this._lobbies.has(lobby.id)) {
            callback(new Error(`No lobby with id "${lobby.id}" found.`));
            return;
        }

        this._lobbies.set(lobby.id, lobby);

        // assure async execution
        setTimeout(() => callback(null, true), 1);
    }

    removeLobby(id, callback) {
        if (!this._lobbies.has(id)) {
            callback(new Error(`No lobby with id "${id}" found.`));
            return;
        }

        this._lobbies.delete(id);

        // assure async execution
        setTimeout(() => callback(null, true), 1);
    }

}

module.exports = MemoryLobbyRepository;
