/**
 * nombre: Jorge Daniel Cruz Vásquez
 * carnet: CV19008
 * estado: Proceso
 * fecha de creación: 02/11/22
 * fecha de última edición: 03/11/2022
 * fecha de última revisión: 
 * fecha de aprobación: 
 */
const{
  listaConsultasFichaMedica
} = require(__dirname + '/ConsultaMedicaControl.js');

module.exports=(app)=>{
  //Ver fichas medicas
  app.route('/beneficiario/:id/ficha/medica/')
  .get(listaConsultasFichaMedica);

}

  