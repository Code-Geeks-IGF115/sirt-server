const { Op } = require("sequelize");
const { RecordAcademico, Beneficiario,DatosAcademicos } = require(`../../models`);

/**
 * Nombre: Remberto Leonardo Escobar Ardón 
 * Carnet: EA12006
 * Estado: En revision
 * Fecha de creación: 18/11/2022
 * Fecha de última edición: 
 * Fecha de última revisión:
 * Fecha de aprobación: 
 */

 async function crearRecordAcademico(request, response) {

    let data = { 'message': "Datos record academico guardados." }
    let parametros = request.body;
    try {

        parametros.materia = parametros.materia;
        parametros.nota = parseFloat(parametros.nota).toFixed(2);
        
        
        
        const recordAcademico=await RecordAcademico.create(parametros);
        data.id=recordAcademico.id;
    } catch (e) {
        data = { 
            'message': "Datos no válidos.",
            "error": e.message
             }
    }
    return response.json(data) //= { 'message': 'Datos medicos guardados' }
}



//Exportacion de controladores
module.exports={
    crearRecordAcademico
};