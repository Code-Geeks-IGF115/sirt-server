//jshint esversion:6
const express = require("express");
const app = express();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require("body-parser");
app.use(cors({
    origin: [process.env.LOCAL_ORIGIN,process.env.REMOTE_ORIGIN]
}));
app.use(bodyParser.json());
const { sequelize } = require(__dirname + "/models/index.js");
const PORT = process.env.PORT || 3000;

//IMPORTACIONES DE CONTROLADORES
const { index } = require(__dirname + '/controladores/indexControl.js');
//MODULO FICHA NUTRICIÓN

/*
* Nombre: Pamela Nicole Barrientos Cruz
* Carnet: BC21009
* Estado: Aprobado, Editado.
* Fecha de creacion: 14/10/22
* Fecha de ultima edicion: 15/10/22
* Fecha de ultima revision: 23/10/2022
* Fecha de aprobacion: 23/10/2022
*/
const { 
  crearDatosMedicos,
  verDatosMedicos,
  editarDatosMedicos 
} = require(__dirname + '/controladores/fichaNutricion/DatosMedicosControl.js');

/*
*Nombre: Remberto Leonardo Escobar Ardón
*Carnet: EA12006
*Estado: Aprobado, Editado.
*Fecha de creacion: 15/10/22
*Fecha de ultima revision: 23/10/2022
*Fecha de aprobacion: 23/10/2022
*/
const { crearDatosAntropometricos,
  verDatosAntropometricos,
  editarDatosAntropometricos
} = require(__dirname + '/controladores/fichaNutricion/DatosAntropometricos.js');

/**
 * nombre:Damaris Julissa Hernández Guardado
 * carnet:HG20040
 * estado:  Aprobado,editado.
 * fecha de creación: Jueves 13 de octubre del 2022
 * fecha de última edición: Viernes 21 de octubre del 2022
 * fecha de última revisión: 23/10/2022
 * fecha de aprobación: 23/10/2022
 */
const { 
  crearHistoriaDietetica,
  verHistoriaDietetica, 
  editarHistoriaDietetica
} = require(__dirname + '/controladores/fichaNutricion/HistoriaDieteticaControl.js');


//Recordatorio 24H
const { 
  crearRecordatorio24H,
  editarRecordatorio24H, 
  verRecordatorio24H 
} = require(__dirname + '/controladores/fichaNutricion/Recordatorio24HControl.js');

const { 
  crearExamenLaboratorio,
  editarExamenLaboratorio,
  verExamenenLaboratorio
} = require("./controladores/fichaNutricion/ExamenesLaboratorioControl");
  
const { crearPlanAlimenticio } = require(__dirname + '/controladores/fichaNutricion/PlanAlimenticioControl.js');

//HabitosDeConsumo
const {crearHabitosConsumo,
  verHabitosConsumo,
  editHabitosConsumo}=require(__dirname + '/controladores/fichaNutricion/HabitosConsumoControl.js');

//ListaAlimentos
const { verListaAlimentos } = require(__dirname + '/controladores/fichaNutricion/AlimentosControl.js');

//RUTAS
app.route('/').get(index);
// FICHA NUTRICIÓN

//Datos médicos
app.route('/ficha/nutricion/consulta/datos/medicos/')
.post(crearDatosMedicos);
app.route('/ficha/nutricion/consulta/datos/medicos/:id')
  .get(verDatosMedicos)
  .post(editarDatosMedicos);

//Datos antropométricos
app.route('/ficha/nutricion/consulta/datos-antropometricos/')
  .post(crearDatosAntropometricos);
app.route('/ficha/nutricion/consulta/datos-antropometricos/:id/edit')
  .post(editarDatosAntropometricos);
app.route('/ficha/nutricion/consulta/datos-antropometricos/:id')
  .get(verDatosAntropometricos);

  //Historia Dietética
app.route('/ficha/nutricion/consulta/historia-dietetica/')
.post(crearHistoriaDietetica);
app.route('/ficha/nutricion/consulta/historia-dietetica/:id/edit')
  .post(editarHistoriaDietetica);
app.route('/ficha/nutricion/consulta/historia-dietetica/:id')
    .get(verHistoriaDietetica);




//plan alimenticio
app.route('/ficha/nutricion/consulta/plan-alimenticio/')
  .post(crearPlanAlimenticio);

//HabitosDeConsumo
app.route('/ficha/nutricion/consulta/habitos-consumo/')
    .post(crearHabitosConsumo);
app.route('/ficha/nutricion/consulta/habitos-consumo/:id')
    .get(verHabitosConsumo);
app.route('/ficha/nutricion/consulta/habitos-consumo/:id/edit')
    .post(editHabitosConsumo)
    
//ListaAlimentos                                                 
app.route('/ficha/nutricion/alimentos/:id').get(verListaAlimentos);


//Examenes de laboratorio
app.route('/ficha/nutricion/consulta/examenes-laboratorio/')
  .post(crearExamenLaboratorio)
  .get(verExamenenLaboratorio);

//RECORDATORIO
app.route('/ficha/nutricion/consulta/recordatorio-24h/')
  .post(crearRecordatorio24H);
app.route('/ficha/nutricion/consulta/recordatorio-24h/:id')
  .get(verRecordatorio24H)
  .post(editarRecordatorio24H);


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