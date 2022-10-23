const { Op } = require("sequelize");
const { DatosMedicos } = require('../../models');

/*
*Nombre: Pamela Nicole Barrientos Cruz
*Carnet: BC21009
*Estado:
*Fecha de creacion: 14/10/22
*Fecha de ultima edicion: 15/10/22
*Fecha de ultima revision:
*Fecha de aprobacion:
*/

//Funcion para crear los datos medicos
async function crearDatosMedicos(request, response) {
     let data = { 'message': 'Datos medicos guardados' }
    parametros = request.body;
    try {
        const datosMedicos = DatosMedicos.build(parametros);
        if (datosMedicos instanceof DatosMedicos) {
            await DatosMedicos.save();
        }
    } catch (excp) {
        data = { 'message:': 'Datos no validos' }
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
async function manipularDatosM(request, response){
    let data4 = {}
    const id2 = request.params.id2;
    try {
        const datosMd = await DatosMedicos.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            where: {
                id2: {
                    [Op.eq]: id2
                }
            }
        });
        data3 = datosMd;

    } catch (error) {
        data4 = {'message':'Datos no validos'}
    }
    return response.json(data4);
}

//Exportacion de controladores
module.exports = {
    crearDatosMedicos,
    verDatosMedicos,
    manipularDatosM,
};