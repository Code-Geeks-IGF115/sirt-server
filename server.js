//jshint esversion:6
const express = require("express");
const app = express();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require("body-parser");
const { sequelize } = require(__dirname + "/models/index.js");
const { index } = require(__dirname + '/controladores/indexControl.js');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors({
  origin: [process.env.LOCAL_ORIGIN, process.env.REMOTE_ORIGIN]
}));
//IMPORTACIONES DE CONTROLADORES
app.route('/').get(index);

//Importaciones de controladores
require(__dirname + '/controladores/fichaNutricion/routes')(app);
require(__dirname + '/controladores/fichaPedagogica/routes')(app);
require(__dirname + '/controladores/fichaPsicologica/routes')(app);
require(__dirname + '/controladores/fichaMedica/routes')(app);
require(__dirname + '/controladores/beneficiario/routes')(app);

app.listen(PORT, async function () {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    //await sequelize.drop();
    // console.log("All tables dropped!");
    //await sequelize.sync();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log(`Server is running on Port ${PORT}`);
});