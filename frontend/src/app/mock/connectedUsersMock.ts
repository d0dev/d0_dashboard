var mockPlayers = [
    {
      id: 1,
      identifiers: ["identifier1", "identifier2"],
      ping: 50,
      coords: { x: 100, y: 200, z: 300 },
      health: 100,
      armor: 50,
      weapon: "weapon1",
      weaponName: "Weapon One",
      name: "Player One",
      job: { job_name: "Job1", job_grade: 1 },
      loadout: ["loadout1", "loadout2"],
      inventory: ["item1", "item2"],
      money: { cash: 500, bank: 500, crypto: 0 },
      userFrameworkIdentifier: "framework1"
    },
    {
      id: 2,
      identifiers: ["identifier3", "identifier4"],
      ping: 60,
      coords: { x: 400, y: 500, z: 600 },
      health: 90,
      armor: 60,
      weapon: "weapon2",
      weaponName: "Weapon Two",
      name: "Player Two",
      job: { job_name: "Job2", job_grade: 2 },
      loadout: ["loadout3", "loadout4"],
      inventory: ["item3", "item4"],
      money: { cash: 1000, bank: 1000, crypto: 0 },
      userFrameworkIdentifier: "framework2"
    }
  ];

var connectedUsers = {
    nOfPlayers: 2,
    core: "QB",
    players: mockPlayers
}

