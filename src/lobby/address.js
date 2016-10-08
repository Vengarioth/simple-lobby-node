class Address {

    constructor(ip, port) {
        this._ip = ip;
        this._port = port;
    }

    get ip() {
        return this._ip;
    }

    get port() {
        return this._port;
    }

}

module.exports = Address;
