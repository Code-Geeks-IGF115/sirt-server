const { Op } = require("sequelize");
const { DatosMedicos } = require('../../models');

//Funcion para crear los datos medicos
async function crearDatosMedicos(request, response) {
    let data = { 'message': 'Datos medicos guardados' };
    parametros = request.body;
    try {
        const datosMedicos = DatosMedicos.build(parametros);
        if (datosMedicos instanceof DatosMedicos) {
            await datosMedicos.save();
        }
    } catch (error) {
        data = { 'message:': error.message }
    }

    return response.json(data);
}

//Funcion para recuperar todos los datos
async function verDatosMedicos(request, response) {
    let data3 = {}
    const id1 = request.query.id1;
    try {
        const datosM = await DatosMedicos.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            where: {
                id1: {
                    [Op.eq]: id1
                }
            }
        });
        data3 = datosM;

    } catch (error) {
        response.status(204);
        data3 = {'message':'Datos no validos'}
    }
    return response.json(data3);
}

//Funcion para manipular los datos en la database
async function editarDatosMedicos(request, response){
    let data = {}
    const id = request.params.id;
    try {
        const datosMd = await DatosMedicos.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            where: {
                id: {
                    [Op.eq]: id
                }
            }
        });
        data = datosMd;

    } catch (error) {
        data = {'message':'Datos no validos'}
    }
    return response.json(data);
}

//Exportacion de controladores
module.exports = {
    crearDatosMedicos,
    verDatosMedicos,
    editarDatosMedicos
};