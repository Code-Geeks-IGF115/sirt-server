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

//Funcion para editar datos médicos en la base de datos
async function editarDatosMedicos(request, response){
    let data = {"message":'Datos Médicos Guardados.'};
    const id = request.params.id;
    const parametros=request.body;
    try {
        await DatosMedicos.update(
            parametros,
            {
                where: {
                    id: {
                        [Op.eq]: id
                    }
                }
            });

    } catch (error) {
        data = {'message':error.message}
    }
    return response.json(data);
}

//Exportacion de controladores
module.exports = {
    crearDatosMedicos,
    verDatosMedicos,
    editarDatosMedicos
};