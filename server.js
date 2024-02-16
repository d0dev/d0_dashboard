const express = require("express");
const cors = require("cors");
const path = require('path');

//var ESX = exports.es_extended.getSharedObject();
var ESX = null;
var QBCore = null;
//const core= "esx"

if (GetResourceState("qb-core") == "started") {
  QBCore = exports["qb-core"].GetCoreObject();
}
if (GetResourceState("es_extended") == "started") {
  ESX = exports.es_extended.getSharedObject();
}


const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });


// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(GetResourcePath(GetCurrentResourceName()),'frontend', 'dist', 'dashpanel-app', 'browser', 'index.html'));
});

// Servir archivos estáticos
app.use(express.static(path.join(GetResourcePath(GetCurrentResourceName()),'frontend', 'dist', 'dashpanel-app', 'browser')));

require("./app/routes/auth.routes")(app);
require("./app/routes/players.routes")(app);
require("./app/routes/turorial.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Hay', GetNumPlayerIndices(), 'jugadores en este momento')
  console.log(`Server is running on port ${PORT}.`);
});

//Ejemplo de hilo independiente
// setInterval(() => {
//   console.log("This is a console log that will be shown every 3 second.");
// }, 3000);

