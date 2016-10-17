class Lobby {

    constructor(id, name, changeCode) {
        this._id = id;
        this._name = name;
        this._changeCode = changeCode;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get changeCode() {
        return this._changeCode;
    }

}

module.exports = Lobby;
