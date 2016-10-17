const test = require('ava');
const Password = require('../../../src/lobby/password');

const code = "someReallyDumbPassword";
const salt = "$0m3_V4lu3";
const hash = (password, salt) => { return password + salt; };
const hashedValue = hash(code, salt);

test('Password defines a property for the hashed value', (t) => {
    const password = new Password(hashedValue, salt, hash);

    t.is(password.hashedValue, hash(code, salt));
});

test('Password defines a property for the salt value', (t) => {
    const password = new Password(hashedValue, salt, hash);

    t.is(password.salt, salt);
});

test('Password successfully compares the original password', (t) => {
    const password = new Password(hashedValue, salt, hash);

    t.true(password.compare(code));
});

test('Password successfully identifies a wrong password', (t) => {
    const password = new Password(hashedValue, salt, hash);

    t.false(password.compare(code + "__altered"));
});
