//jshint esversion:6
require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors({
    origin: [process.env.LOCAL_ORIGIN,process.env.REMOTE_ORIGIN]
}));
const { sequelize } = require(__dirname + "/models/index.js");
const PORT = process.env.PORT || 3000;
//IMPORTACIONES DE CONTROLADORES
const { index } = require(__dirname + '/controladores/indexControl.js');

//MODULO FICHA NUTRICIÓN
const { crearHistoriaDietetica,
  verHistoriasDieteticas,
  verHistoriasDieteticas2,
  verHistoriasDieteticas3 } = require(__dirname + '/controladores/fichaNutricion/HistoriaDieteticaControl.js');

const { crearDatosMedicos,
  verDatosMedicos,
  manipularDatosM } = require(__dirname + '/controladores/fichaNutricion/DatosMedicosControl.js');

const { 
  recuperarExamenes,
  modificarDatos } = require(__dirname + '/controladores/fichaNutricion/ExamenesLaboratorioControl.js');

const { crearDatosAntropometricos} = require(__dirname + '/controladores/fichaNutricion/DatosAntropometricos.js');
  const {crearPlanAlimenticio} = require(__dirname + '/controladores/fichaNutricion/PlanAlimenticioControl.js');

//HabitosDeConsumo
const {crearHabitosConsumo}=require(__dirname + '/controladores/fichaNutricion/HabitosConsumoControl.js');

//ListaAlimentos
const{verListaAlimentos}=require(__dirname  +'/controladores/fichaNutricion/AlimentosControl.js' );


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

//Datos antropométricos
app.route('/ficha/nutricion/consulta/datos-antropometricos/')
  .post(crearDatosAntropometricos); 

//plan alimenticio
app.route('/ficha/nutricion/consulta/plan-alimenticio/')
  .post(crearPlanAlimenticio);

//HabitosDeConsumo
app.route('/ficha/nutricion/consulta/habitos-consumo/')
    .post(crearHabitosConsumo);
    
//ListaAlimentos                                                 
app.route('/ficha/nutricion/alimentos/:id').get(verListaAlimentos);


//Examenes de laboratorio
app.route('/ficha/nutricion/consulta/examenes-laboratorio/')
  .post(crearHabitosConsumo)
  .get(recuperarExamenes);


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