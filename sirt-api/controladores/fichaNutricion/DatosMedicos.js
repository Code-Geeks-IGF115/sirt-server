const { Op } = require("sequelize");
const { DatosMedicos } = require('../../models');

/*
*Nombre: Pamela Nicole Barrientos Cruz
*Carnet: BC21009
*Estado:
*Fecha de creacion: 14/10/22
*Fecha de ultima revision:
*Fecha de aprobacion:
*/

//Funcion para crear los datos medicos
async function crearDatosMedicos(request, response) {
    data2 = { 'message': 'Datos medicos guardados' }
    parametros = request.body;
    try {
        const datosMedicos = DatosMedicos.build(parametros);
        if (datosMedicos instanceof DatosMedicos) {
            await DatosMedicos.save();
        }
    } catch (excp) {
        data2 = { 'message:': 'Datos no validos' }
    }
    return true;
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
        data3 = {'message':'Datos no validos'}
    }
    return true;
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
    return true;
}

//Exportancion de controladores
module.exports = {
    crearDatosMedicos,
    verDatosMedicos,
    manipularDatosM,
};