
const { Op } = require("sequelize");
const { DatosAcademicos, RecordAcademico, Beneficiario, Consulta } = require(`../../models`);

/**
 * Nombre: Remberto Leonardo Escobar Ardón 
 * Carnet: EA12006
 * Estado: En revision
 * Fecha de creación: 18/11/2022
 * Fecha de última edición: 
 * Fecha de última revisión:
 * Fecha de aprobación: 
 */

 async function verDatosAcademicos(request, response) {
    let data = {}
    //recuperando los parametros
    const idBeneficiario = request.params.idBeneficiario;
    const idConsulta = request.params.idConsulta;
    const parametros = request.body;
    try {
        //actualizando datos académicos
         const datosAcademicos = await DatosAcademicos.findAll(
          parametros,
            {
                where: {
                    beneficiarioId: {
                        [Op.eq]: idBeneficiario
                    }
                },
                andWhere:{
                    consultaId: {
                        [Op.eq]: idConsulta
                    }
                }
            }
        );
        //actualizando records académicos
         {
            const recordAcademico = await RecordAcademico.findAll(
               recordAcademico,
                {
                    where: {
                        id: {
                            [Op.eq]: recordAcademico.id
                        },
                        
                    }
    
                });
                  };
        data = datosAcademicos;
         }
    catch (e) {
        data = {
            "message": "Datos no válidos.",
            "error": e.message
        }
    }
    return response.json(data);


}
       



//CONTROLADORES 
/**
 * nombre:Damaris Julissa Hernández Guardado
 * carnet:HG20040
 * estado:  En proceso 
 * fecha de creación: viernes 18 de noviembre del 2022
 * fecha de última edición:
 * fecha de última revisión: 
 * fecha de aprobación: 
 */
async function editarDatosAcademicos(request, response) {
    let data = {}
    //recuperando los parametros
    const idBeneficiario = request.params.idBeneficiario;
    const idConsulta = request.params.idConsulta;
    const parametros = request.body;
    try {
        //actualizando datos académicos
        await DatosAcademicos.update(
         parametros,
            {
                where: {
                    beneficiarioId: {
                        [Op.eq]: idBeneficiario
                    }
                },
                andWhere:{
                    consultaId: {
                        [Op.eq]: idConsulta
                    }
                }
            }
        );
        //actualizando records académicos
         parametros.recordAcademicos.forEach(recordAcademico => {
            RecordAcademico.update(
               recordAcademico,
                {
                    where: {
                        id: {
                            [Op.eq]: recordAcademico.id
                        },
                        
                    }
    
                });
                 });
        data = { "message": `Datos Academicos  Modificados. Beneficiario ${idBeneficiario}, Consulta ${idConsulta}` }
         }
    catch (e) {
        data = {
            "message": "Datos no válidos.",
            "error": e.message
        }
    }
    return response.json(data);


}





async function crearDatosAcademicos(request,response){
    
    let data={'message':"Datos académicos guardados."}
   
    //recuperando los parametros
    let {idConsulta,idBeneficiario, recordAcademicos}=request.body;
    try{
        
        //recuperando consulta
        // const consulta = await Consulta.findOne({ where: { id: parseInt(consultaId)} });
        // const beneficiario = await Beneficiario.findOne({ where: { id: parseInt(beneficiarioId)} });
        
        const datosAcademicos = await DatosAcademicos.create(
            {
                "beneficiarioId": idBeneficiario,
                "consultaId": idConsulta
            });
            
        recordAcademicos.forEach(async (record) => {    
            // console.info(datosAcademicos.id);      
            record.datosAcademicosId =datosAcademicos.id;
            record.DatosAcademicoId =datosAcademicos.id;
            await RecordAcademico.create(record);          
        });
        data.id=datosAcademicos.id;
             
    }catch(e){
        // response.status(304);
        data = { 
            'message': "Datos no válidos.",
            "error": e.message
             }
    }
    
    return response.json(data);
}

 


//Exportacion de controladores
module.exports={
    crearDatosAcademicos,
    verDatosAcademicos,
    editarDatosAcademicos
};


