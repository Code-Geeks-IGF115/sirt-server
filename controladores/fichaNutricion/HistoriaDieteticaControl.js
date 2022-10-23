//jshint esversion:6
const { request, response } = require("express");
const { Op } = require("sequelize");
const { HistoriaDietetica, Consulta } = require(`../../models`);

// CONTROLADORES 
async function crearHistoriaDietetica(request, response) {

    let data = { 'message': "Historia Dietética Guardada." }
    let { consultaId, ...parametros } = request.body;
    try {
        const consulta = await Consulta.findOne({ where: { id: parseInt(consultaId) } });
        parametros.horasDeSueno = parseInt(parametros.horasDeSueno);
        parametros.consultaId = consulta.id;
        const historiaDietetica = await HistoriaDietetica.create(parametros);
        data.id=historiaDietetica.id;
        // if (historiaDietetica instanceof HistoriaDietetica) {
        //     await historiaDietetica.save(); //guardando en la base de datos
        // }
    } catch (e) {
        response.status(304);
        data = { 
            'message': "Datos no válidos.",
            "error": e.message
             }
    }
    return response.json(data);
}

async function verHistoriaDietetica(request,response){
    let data = {}
    const id = request.params.id;
    try {
        // recuperar todos las historias dietéticas
        const historias = await HistoriaDietetica.findOne({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            where: {
                id: {
                    [Op.eq]: id
                }

            }
        });
        data = historias;
    } catch (e) {
        data = { 
            'message': "Datos no válidos.",
            "error": e.message
             }
    }
    return response.json(data);
}
async function editarHistoriaDietetica(request,response){
    let data = {}
    const id = request.params.id;
    const parametros=request.body;
    try {
        // recuperar todos las historias dietéticas
        await HistoriaDietetica.update(
            parametros,
            {
                where: {
                    id: {
                        [Op.eq]: id
                    }
    
                }
            }
        );
        data = { "message":"Historia Dietética Modificada."}
    } catch (e) {
        data = { 
            "message": "Datos no válidos.",
            "error": e.message
             }
    }
    return response.json(data);
}

// EXPORTANDO CONTROLADORES
module.exports = {
    crearHistoriaDietetica,
    verHistoriaDietetica,
    editarHistoriaDietetica
};