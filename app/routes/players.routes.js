var router = require("express").Router();
const getWeaponName = require('../utils/getWeaponName.js');


module.exports = app => {

    router.get('/numPlayers', (req, res) => {
        res.send({
            nOfPlayers: GetNumPlayerIndices(),
        });
    });

    router.get('/players', (req, res) => {
        res.send({
            nOfPlayers: GetNumPlayerIndices(),
            core: ESX ? "ESX" : QBCore ? "QB" : null,
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
                identifiers.push(GetPlayerIdentifier(player, i))
            }
            let playerName= '',job = '', loadout = '', inventory = '', money = '', frameworkIdentifier = '';
            if (player) {
                if (ESX) {
                    xPlayer = ESX.GetPlayerFromId(player)
                    playerName = xPlayer.getName()
                    job = xPlayer.getJob()
                    loadout = xPlayer.getLoadout()
                    inventory = xPlayer.getInventory()
                    money = xPlayer.accounts
                };
                if (QBCore) {
                    const playerData = QBCore.Functions.GetPlayer(player);
                    //playerName = charinfo.firstname + ' ' + charinfo.lastname;
                    userFrameworkIdentifier = playerData.PlayerData.citizenid;
                    
                    playerName = playerData.PlayerData.charinfo.firstname + ' ' + playerData.PlayerData.charinfo.lastname;
                    job = playerData.PlayerData.job;
                    money = playerData.PlayerData.money;

                    const items = playerData.PlayerData.items;
                    inventory = items.filter(item => item.type !== 'weapon');
                    loadout = items.filter(item => item.type == 'weapon');
                }
            }
            players.push({
                id: player,
                identifiers: identifiers,    
                coords: GetEntityCoords(ped),
                health: GetEntityHealth(ped),
                armor: GetPedArmour(ped),
                weapon: GetSelectedPedWeapon(ped),
                weaponName: getWeaponName(GetSelectedPedWeapon(ped)),
                name: playerName,
                job: job,
                loadout: loadout,
                inventory: inventory,
                money: money,
                userFrameworkIdentifier: userFrameworkIdentifier
            });
        }        
        return players;
    }

    app.use('/api/players', router);
};
