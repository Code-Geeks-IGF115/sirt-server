//jshint esversion:6
const { Op } = require("sequelize");
const { DatosAcademicos, RecordAcademico } = require(`../models`);

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
//EXPORTANDO CONTROLADORES 
module.exports = {
    editarDatosAcademicos
}
