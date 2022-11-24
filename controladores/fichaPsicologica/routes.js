/** Nombre: Pamela Nicole Barrientos Cruz
 * Carnet: BC21009
 * Estado: 
 * Fecha de creación: 18/11/2022
 * Fecha de revisión:
 * Fecha de última edición: 18/11/2022
 * Fecha de aprobación:
 */

const { 
    EditPlanTerapeutico,
    verPlanTerapeutico,
    crearPlanTerapeutico
   } = require(__dirname + '/PlanTerapeuticoControl.js');
  
//listaConsultasFichaPsicológica
const { listaConsultasFichaPsicologica} = require(__dirname + '/ConsultaPsicologicaControl.js');

module.exports =(app)=>{
    app.use(cors({
        origin: [process.env.LOCAL_ORIGIN, process.env.REMOTE_ORIGIN]
      }));
    //listaConsultasFichaPsicológica
    app.route('/beneficiario/:id/ficha/psicologica/')
    .get(listaConsultasFichaPsicologica);
    //Plan Terapeutico
    app.route('/beneficiario/:id/ficha/psicologica/:idConsulta')
    .post(EditPlanTerapeutico)
    app.route('/beneficiario/:id/ficha/psicologica/:idConsulta')
    .get(verPlanTerapeutico);

    //crear Plan terapéutico
    app.route('/beneficiario/:id/ficha/psicologica/')
    .post(crearPlanTerapeutico);


}