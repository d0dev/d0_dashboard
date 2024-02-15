var router = require("express").Router();

module.exports = app => {
    router.get('/players', (req, res) => {
        res.send({
            nOfPlayers: GetNumPlayerIndices(),
            players: getPlayers()
        });
    });
    
    function getPlayers(){
        const players = [];
        for (let i = 0; i < GetNumPlayerIndices(); i++) {
            const player = GetPlayerFromIndex(i);
            const ped = GetPlayerPed(player);
            const identifiers = [];
            //GetNumPlayerIdentifiers
            for (let i = 0; i < GetNumPlayerIdentifiers(player); i++) {
                console.log(GetPlayerIdentifier(player,i))
                identifiers.push(GetPlayerIdentifier(player,i))
            }
            console.log("test",GetPlayerIdentifier(player,0))
            if (player) {
                players.push({
                    id: parseInt(player),
                    identifiers: identifiers,    
                    coords: GetEntityCoords(ped),
                    health: GetEntityHealth(ped),
                    armor: GetPedArmour(ped),
                    weapon: GetSelectedPedWeapon(ped),
                });
            }
        }
    console.log(players)
        return players;
    }




    app.use('/api/players', router);
};

