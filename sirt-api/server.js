//jshint esversion:6
const express = require("express");
const app = express();
require('dotenv').config();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const { sequelize } = require(__dirname + "/models/index.js");
const PORT = process.env.PORT || 3001;

//IMPORTACIONES DE CONTROLADORES
const { index } = require(__dirname + '/controladores/indexControl.js');
//MODULO FICHA NUTRICIÓN
const { crearHistoriaDietetica,
  verHistoriasDieteticas,
  verHistoriasDieteticas2,
  verHistoriasDieteticas3 } = require(__dirname + '/controladores/fichaNutricion/HistoriaDieteticaControl.js');

const { crearDatosMedicos,
  verDatosMedicos,
  manipularDatosM } = require(__dirname + '/controladores/fichaNutricion/DatosMedicos.js');

const { crearDatosAntropometricos} = require(__dirname + '/controladores/fichaNutricion/DatosAntropometricos.js');


//RUTAS
app.route('/').get(index);
// FICHA NUTRICIÓN
//Historia Dietética
app.route('/ficha/nutricion/consulta/historia-dietetica/')
  .post(crearHistoriaDietetica)
  .get(verHistoriasDieteticas);
app.route('/ficha/nutricion/consulta/historia-dietetica2/')
  .get(verHistoriasDieteticas2);
app.route('/ficha/nutricion/consulta/historia-dietetica3/:id')
  .get(verHistoriasDieteticas3);

//Datos médicos
app.route('/ficha/nutricion/consulta/datos/')
  .post(crearDatosMedicos) 
  .get(verDatosMedicos);
//app.route('/ficha/nutricion/consulta/datos/')
//  .get(manipularDatosM);

//Datos antropometricos
app.route('/ficha/nutricion/consulta/datos-antropometricos/')
  .post(crearDatosAntropometricos); 



app.listen(PORT, async function () {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    // await sequelize.drop();
    // console.log("All tables dropped!");
    //await sequelize.sync();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log(`Server is running on Port ${PORT}`);
});