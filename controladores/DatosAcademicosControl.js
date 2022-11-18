const { Op } = require("sequelize");
const { DatosAcademicos, Beneficiario } = require(`../../models`);

/**
 * Nombre: Remberto Leonardo Escobar Ardón 
 * Carnet: EA12006
 * Estado: En revision
 * Fecha de creación: 18/11/2022
 * Fecha de última edición: 
 * Fecha de última revisión:
 * Fecha de aprobación: 
 */

 async function crearDatosAcademicos(request, response) {

    let data = { 'message': "Datos academicos guardados." }
    let parametros = request.body;
    try {

        parametros.centroDeEstudios = parametros.centroDeEstudios;
        parametros.nivelAcademicoEnCruso = parametros.nivelAcademicoEnCruso;
        parametros.gradoEnCurso = parametros.gradoEnCurso;
        parametros.rendimientoAcademico = parametros.rendimientoAcademico;
        
        
        
        const datosAacademicos=await DatosAcademicos.create(parametros);
        data.id=datosAcademicos.id;
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
    crearDatosAcademicos
};