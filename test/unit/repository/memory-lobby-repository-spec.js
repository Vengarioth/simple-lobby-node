const test = require('ava');
const MemoryLobbyRepository = require('../../../src/repository/memory-lobby-repository');

test.cb('MemoryLobbyRepository stores a lobby', (t) => {
    const mockedLobby = { id: 'someId', foo: 'bar' };
    const memoryLobbyRepository = new MemoryLobbyRepository();

    t.plan(2);
    memoryLobbyRepository.addLobby(mockedLobby, (error, ok) => {
        t.falsy(error);
        t.true(ok);
        t.end();
    });
});

test.cb('MemoryLobbyRepository retrieves a previously stored lobby', (t) => {
    const mockedLobby = { id: 'someId', foo: 'bar' };
    const memoryLobbyRepository = new MemoryLobbyRepository();

    t.plan(2);
    memoryLobbyRepository.addLobby(mockedLobby, (error, ok) => {
        memoryLobbyRepository.findLobbyById('someId', (error, foundLobby) => {
            t.falsy(error);
            t.is(foundLobby, mockedLobby);
            t.end();
        });
    });
});

test.cb('MemoryLobbyRepository updates a stored lobby', (t) => {
    const mockedLobby = { id: 'someId', foo: 'bar' };
    const updatedMockedLobby = { id: 'someId', foo: 'fiz' };
    const memoryLobbyRepository = new MemoryLobbyRepository();

    t.plan(2);
    memoryLobbyRepository.addLobby(mockedLobby, (error, ok) => {
        memoryLobbyRepository.updateLobby(updatedMockedLobby, (error, ok) => {
            memoryLobbyRepository.findLobbyById('someId', (error, foundLobby) => {
                t.falsy(error);
                t.is(foundLobby, updatedMockedLobby);
                t.end();
            });
        });
    });
});

test.cb('MemoryLobbyRepository removes a stored lobby', (t) => {
    const mockedLobby = { id: 'someId', foo: 'bar' };
    const memoryLobbyRepository = new MemoryLobbyRepository();

    t.plan(1);
    memoryLobbyRepository.addLobby(mockedLobby, (error, ok) => {
        memoryLobbyRepository.removeLobby('someId', (error, ok) => {
            memoryLobbyRepository.findLobbyById('someId', (error, foundLobby) => {
                t.truthy(error);
                t.end();
            });
        });
    });
});
