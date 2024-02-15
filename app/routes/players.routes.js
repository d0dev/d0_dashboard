var router = require("express").Router();
const getWeaponName = require('../utils/getWeaponName.js');


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
            const player = parseInt(GetPlayerFromIndex(i));
            const ped = GetPlayerPed(player);
            const identifiers = [];
            for (let i = 0; i < GetNumPlayerIdentifiers(player); i++) {
                identifiers.push(GetPlayerIdentifier(player,i))
            }
        let playerName = '', xPlayer = '';
            //console.log("test",GetPlayerIdentifier(player,0))
            if (player) {
                if (core == "esx")  {
                    xPlayer = ESX.GetPlayerFromId(player)
                    playerName = xPlayer.getName()    
                     //console.log(xPlayer, name)                  
                   
                };     
                players.push({
                    id: player,
                    identifiers: identifiers,    
                    coords: GetEntityCoords(ped),
                    health: GetEntityHealth(ped),
                    armor: GetPedArmour(ped),
                    weapon: GetSelectedPedWeapon(ped),
                    weaponName: getWeaponName(GetSelectedPedWeapon(ped)),
                    name: playerName,
                    job: xPlayer.job,
                    loadout: xPlayer.loadout,
                    inventory: xPlayer.inventory,
                    addonAccounts: xPlayer.accounts,
                });
            }
        }        
        return players;
    }




    app.use('/api/players', router);
};

