module.exports = (router, lobbyController) => {
    router.get('/lobby', (req, res) => {
        lobbyController.findAllLobbies((error, response) => {
            if(error) {
                res.status(500).json(error);
                return;
            }
            res.json(response);
        });
    });

    router.get('/lobby/:id', (req, res) => {

        const id = req.params.id;

        lobbyController.findLobby(id, (error, response) => {
            if(error) {
                res.status(500).json(error);
                return;
            }

            res.json(response);
        });
    });

    router.put('/lobby/', (req, res) => {

        const name = req.body.name;

        lobbyController.createLobby(name, (error, response) => {
            if(error) {
                res.status(500).json(error);
                return;
            }

            res.json(response);
        });
    });

    router.post('/lobby/:id', (req, res) => {

        const id = req.params.id;
        const data = req.body;
        const changeCode = req.body.changeCode;

        lobbyController.updateLobby(id, data, changeCode, (error, response) => {
            if(error) {
                res.status(500).json(error);
                return;
            }

            res.json(response);
        });
    });

    router.delete('/lobby/:id', (req, res) => {

        const id = req.params.id;
        const changeCode = req.body.changeCode;

        lobbyController.closeLobby(id, changeCode, (error, response) => {
            if(error) {
                res.status(500).json(error);
                return;
            }

            res.json(response);
        });
    });
};
