const test = require('ava');
const createLobbyResponse = require('../../../src/contract/createLobbyResponse');

test('createLobbyResponse returns an object containing lobby information', (t) => {
    const mockedLobby = {
        id: 'someId',
        name: 'someName',
        changeCode: 'someChangeCode'
    };

    const result = createLobbyResponse(mockedLobby);

    t.deepEqual(result, {
        lobby: {
            id: 'someId',
            name: 'someName',
            changeCode: 'someChangeCode'
        }
    });

});
