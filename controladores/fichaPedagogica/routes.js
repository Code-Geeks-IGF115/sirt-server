//Datos academicos
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
      editarDatosAcademicos,
    /**
     * nombre:Remberto Leonardo Escobar Ardón
     * carnet:EA12006
     * estado: en revision 
     * fecha de creación: Jueves 13 de octubre del 2022
     * fecha de última edición: Viernes 18 de noviembre del 2022
     * fecha de última revisión:
     * fecha de aprobación: 
     */
    crearDatosAcademicos,
    verDatosAcademicos
    
   } = require(__dirname + '/DatosAcademicosControl.js');

module.exports=(app)=>{
  app.use(cors({
    origin: [process.env.LOCAL_ORIGIN, process.env.REMOTE_ORIGIN]
  }));
    //DatosAcademicos
    app.route('/beneficiario/:idBeneficiario/ficha/terapeutica/:idConsulta/edit')
    .post(editarDatosAcademicos);

    //Datos academicos
    app.route('/beneficiario/:id/ficha/terapeutica/:idConsulta/new')
    .post(crearDatosAcademicos);

    app.route('/beneficiario/:idBeneficiario/ficha/terapeutica/:idConsulta')
    .get(verDatosAcademicos);
}