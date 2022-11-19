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
  } = require(__dirname + '/DatosAntropometricosControl.js');
  
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
  } = require(__dirname + '/HistoriaDieteticaControl.js');

/**
 * nombre:Vinicio Alonso Sibrian Vargas
 * carnet:SV16028
 * estado: APROBADO, editado.
 * fecha de creación: 14/10/2022
 * fecha de última edición: 21/10/2022
 * fecha de última revisión: 23/10/2022
 * fecha de aprobación: 23/10/2022
 */

//HabitosDeConsumo
const { crearHabitosConsumo,
    verHabitosConsumo,
    editHabitosConsumo } = require(__dirname + '/HabitosConsumoControl.js');
/**
* nombre: Jorge Daniel Cruz Vásquez
* carnet: CV19008
* estado: Aprobado. editado.
* fecha de creación: 14/10/22
* fecha de última edición: 22/10/2022
* fecha de última revisión: 23 octubre 2022
* fecha de aprobación: 23/10/2022
*/
//Recordatorio 24H
const {
    crearRecordatorio24H,
    editarRecordatorio24H,
    verRecordatorio24H
  } = require(__dirname + '/Recordatorio24HControl.js');
  
  /*
  Nombre: Pamela Nicole Barrientos Cruz
  Carnet: BC21009
  Estado: Aprobado.
  Fecha de creacion: 14/10/2022
  Fecha de ultima edicion: 16/10/2022
  Fecha de ultima revision: 23/10/2022
  Fecha de aprobacion: 23/10/2022
  */
  const {
    crearExamenLaboratorio,
    editarExamenLaboratorio,
    verExamenesLaboratorio
  } = require(__dirname +"/ExamenesLaboratorioControl.js");
  
  
  /**
   * nombre:Vinicio Alonso Sibrian Vargas
   * carnet:SV16028
   * estado: APROBADO
   * fecha de creación: 17/10/2022
   * fecha de última edición: 21/10/2022
   * fecha de última revisión: 23/10/2022
   * fecha de aprobación: 23/10/2022
   */
  //ListaAlimentos
  const { verListaAlimentos } = require(__dirname + '/AlimentosControl.js');
  
  /**
   * nombre:Damaris Julissa Hernández Guardado
   * carnet:HG20040
   * estado:  Aprobado
   * fecha de creación: Sabado 15 de octubre del 2022
   * fecha de última edición: Martes 18 de octubre del 2022
   * fecha de última revisión: 23/10/2022
   * fecha de aprobación: 23/10/2022
   */
  const {
    crearPlanAlimenticio,
    editarPlanAlimenticio,
    verPlanAlimenticio
  } = require(__dirname + '/PlanAlimenticioControl.js');

  
const {
    listaConsultasFichaNutricion
  } = require(__dirname + '/ConsultaNutricionControl.js');

module.exports= (app)=>{
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
  app.route('/ficha/nutricion/consulta/plan-alimenticio/:id')
  .get(verPlanAlimenticio)
  .post(editarPlanAlimenticio);

  //HabitosDeConsumo
  app.route('/ficha/nutricion/consulta/habitos-consumo/')
  .post(crearHabitosConsumo);
  app.route('/ficha/nutricion/consulta/habitos-consumo/:id')
  .get(verHabitosConsumo);
  app.route('/ficha/nutricion/consulta/habitos-consumo/:id/edit')
  .post(editHabitosConsumo)

  //ListaAlimentos                                                 
  app.route('/ficha/nutricion/alimentos/').get(verListaAlimentos);

  //Examenes de laboratorio
  app.route('/ficha/nutricion/consulta/examenes-laboratorio/')
  .post(crearExamenLaboratorio);
  app.route('/ficha/nutricion/consulta/examenes-laboratorio/:id')
  .post(editarExamenLaboratorio)
  .get(verExamenesLaboratorio);

  //RECORDATORIO
  app.route('/ficha/nutricion/consulta/recordatorio-24h/')
  .post(crearRecordatorio24H);
  app.route('/ficha/nutricion/consulta/recordatorio-24h/:id')
  .get(verRecordatorio24H)
  .post(editarRecordatorio24H);

  app.route('/beneficiario/:id/ficha/nutricion/')
  .get(listaConsultasFichaNutricion);
}