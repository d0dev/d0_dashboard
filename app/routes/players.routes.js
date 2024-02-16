var router = require("express").Router();
const playersController = require('../controllers/players.controller.js');



module.exports = app => {

    router.get('/numPlayers', (req, res) => {
        res.send({
            nOfPlayers: GetNumPlayerIndices(),
        });
    });

    router.get("/players", playersController.getPlayers);


    
    app.use('/api/players', router);
};
