module.exports = function createLobbyResponse(lobby) {

    return {
        lobby: {
            id: lobby.id,
            name: lobby.name,
            changeCode: lobby.changeCode
        }
    };

};
