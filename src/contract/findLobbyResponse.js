module.exports = function findLobbyResponse(lobby) {

    return {
        lobby: {
            id: lobby.id,
            name: lobby.name
        }
    };

};
