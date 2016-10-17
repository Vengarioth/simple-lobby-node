module.exports = function findAllLobbiesResponse(lobbies) {

    return {
        lobbies: lobbies.map((lobby) => {
            return {
                id: lobby.id,
                name: lobby.name
            };
        })
    };

};
