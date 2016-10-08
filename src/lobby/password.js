class Password {
    constructor(hashedValue, salt, hash) {
        this._hashedValue = hashedValue;
        this._salt = salt;
        this._hash = hash;
    }

    get salt() {
        return this._salt;
    }

    get hashedValue() {
        return this._hashedValue;
    }

    compare(password) {
        return this._hashedValue === this._hash(password, this._salt);
    }

}

module.exports = Password;
