//jshint esversion:6
const { Op, where } = require("sequelize");
//MODELO
const { Recordatorio24H, sequelize } = require('../../models');
/**
 * nombre: Jorge Daniel Cruz Vásquez
 * carnet: CV19008
 * estado: DESARROLLO
 * fecha de creación: 14/10/22
 * fecha de última edición: 22/10/2022
 * fecha de última revisión: 21 octubre 2022
 * fecha de aprobación: 
 */

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
    } catch (e) {
        data = { "message": "Error A guardar el Recordatorio" }
    }

    return response.json(data);
}

async function verRecordatorio24H(request, response) {
    let data1 = {};
    const id = request.params.id;
    try {
        //recuperar el recordatorio
        const recordatorios = await Recordatorio24H.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            where: {
                id: {
                    [Op.eq]: id
                }
            }
        });

        data1 = recordatorios;

    } catch (e) {
        data1 = { "message": e.message };
    }
    return response.json(data1);
}

async function editarRecordatorio24H(request, response) {
    let data2 = { "message": "Recordatorio de 24 horas guardado." }
    const id = request.params.id;
    
    try {
        //recuperar el recordatorio
        const ediRecordatorio = await Recordatorio24H.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            where: {
                id: {
                    [Op.eq]: id
                }
            }
        });

        data2 = { id, message: "Recordatorio Actualizado" };

    } catch (e) {
        data2 = { "message": e.message };
    }
    return response.json(data2);
}

//EXPORTANDO CONTROLADORES
module.exports = {
    crearRecordatorio24H,
    verRecordatorio24H,
    editarRecordatorio24H
};