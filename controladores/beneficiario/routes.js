const { 
   /**
  * nombre:Damaris Julissa Hernández Guardado
  * carnet:HG20040
  * estado:  En proceso 
  * fecha de creación: Viernes 18 de noviembre del 2022
  * fecha de última edición:
  * fecha de última revisión: 
  * fecha de aprobación: 
  */
    verBeneficario,
  /*
  *Nombre: Remberto Leonardo Escobar Ardón
  *Carnet: EA12006
  *Estado: en proceso
  *Fecha de creacion: 03/11/22
  *Fecha de ultima revision:
  *Fecha de aprobacion:
  */
  editarBeneficiario,
    /**
   * Nombre: Pamela Nicole Barrientos Cruz
   * Carnet: BC21009
   * Estado:
   * Fecha de creación: 2/11/2022
   * Fecha de última edición: 4/11/2022
   * Fecha de última revisión:
   * Fecha de aprobación:
   */
  registrarBeneficiario,
  listaBeneficiarios
  } = require(__dirname + '/BeneficiarioControl.js');

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
} = require(__dirname + '/DatosMedicosControl.js');

const{
   /**
    * nombre: Jorge Daniel Cruz Vásquez
    * carnet: CV19008
    * estado: Proceso
    * fecha de creación: 02/11/22
    * fecha de última edición: 02/11/2022
    * fecha de última revisión: 
    * fecha de aprobación: 
    */
  editarResponsable,
  /**
   * nombre:Damaris Julissa Hernández Guardado
   * carnet:HG20040
   * estado:  En proceso 
   * fecha de creación: Miercoles 02 de noviembre del 2022
   * fecha de última edición:
   * fecha de última revisión: 
   * fecha de aprobación: 
   */
  registrarResponsable,
  verResponsable
} = require(__dirname + '/ResponsableControl.js');

module.exports = (app)=>{
    //Beneficiario
    app.route('/beneficiario/:id/edit')
    .post(editarBeneficiario);
    app.route('/responsable/:dui/beneficiario')
    .get(listaBeneficiarios)
    .post(registrarBeneficiario);
    app.route('/beneficiario/:id')
    .get(verBeneficario);
    
    //RESPONSABLE 
    app.route('/responsable/')
        .post(registrarResponsable);
    app.route('/responsable/:dui')
        .get(verResponsable);
    app.route('/responsable/:dui')
    .post(editarResponsable);

    //Datos médicos
    app.route('/ficha/nutricion/consulta/datos/medicos/')
    .post(crearDatosMedicos);
    app.route('/ficha/nutricion/consulta/datos/medicos/:id')
    .get(verDatosMedicos)
    .post(editarDatosMedicos);
  
}