//jshint esversion:6
const { Op, where } = require("sequelize");
//MODELO
const { Recordatorio24H, sequelize } = require('../../models');

//CONTROLADORES
async function crearRecordatorio24H(request, response) {
    let data = { "message": "Recordatorio de 24 horas guardado." }
    let parametros = request.body;
    //CREANDO INSTANCIA
    try {
        const recordatorio24H = Recordatorio24H.build(parametros);
        if (recordatorio24H instanceof Recordatorio24H) {//devolvió true, es una instancia de Recordatorio24H
            await recordatorio24H.save();//guardando en base de datos
        }
        data.id=recordatorio24H.id
    } catch (e) {
        data = { 
            'message': "Error A guardar el Recordatorio",
            "error": e.message
             }
    }

    return response.json(data);
}

async function verRecordatorio24H(request, response) {
    let data1 = {};
    const id = request.params.id;
    try {
        //recuperar el recordatorio
        const recordatorios = await Recordatorio24H.findOne({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            where: {
                id: {
                    [Op.eq]: id
                }
            }
        });

        data1 = recordatorios;

    } catch (e) {
        data1 = { 
            'message': "Datos no válidos.",
            "error": e.message
             }
    }
    return response.json(data1);
}

async function editarRecordatorio24H(request, response) {
    let data2 = { "message": "Recordatorio de 24 horas guardado." }
    const id = request.params.id;
    const parametros=request.body;
    
    try {
        //recuperar el recordatorio
        await Recordatorio24H.update(
            parametros,
            {
                where: {
                    id: {
                        [Op.eq]: id
                    }
                }
            });

        data2 = { "message": "Recordatorio Modificado." };

    } catch (e) {
        data2 = { 
            'message': "Datos no válidos.",
            "error": e.message
             }
    }
    return response.json(data2);
}

//EXPORTANDO CONTROLADORES
module.exports = {
    crearRecordatorio24H,
    verRecordatorio24H,
    editarRecordatorio24H
};