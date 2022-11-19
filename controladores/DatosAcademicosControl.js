const { Op } = require("sequelize");
const { DatosAcademicos, RecordAcademico, Beneficiario, Consulta } = require(`../models`);

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


async function crearDatosAcademicos(request,response){
    
    let data={'message':"Plan Alimenticio Guardado."}
   
    //recuperando los parametros
    let {consultaId,beneficiarioId}=request.body;
    try{
        
        //recuperando consulta
        const consulta = await Consulta.findOne({ where: { id: parseInt(consultaId)} });
        const beneficiario = await Beneficiario.findOne({ where: { id: parseInt(beneficiarioId)} });
        
        const datosAacademicos = await DatosAcademicos.create(
            {
                "beneficiarioId": beneficiario.id,
                "consultaId": consulta.id
            });
            
        record.forEach(async (record) => {
            
            record.DatosAcademicosId =datosAacademicos.id;
        
            await RecordAcademico.create(record);          
        },this);
        data.id=datosAacademicos.id;
             
    }catch(e){
        response.status(304);
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
    verDatosAcademicos
};