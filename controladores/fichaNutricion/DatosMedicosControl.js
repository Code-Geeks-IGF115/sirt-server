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
        response.status(500);
        data = { 'message:': error.message }
    }

    return response.json(data);
}

//Funcion para recuperar todos los datos
async function verDatosMedicos(request, response) {
    let data = {}
    const id = request.params.id;
    try {
        data = await DatosMedicos.findOne({
            attributes: { exclude: ['createdAt', 'updatedAt','datosMedicoId'] },
            where: {
                id: {
                    [Op.eq]: id
                }
            }
        });
        // data = datosM;

    } catch (error) {
        response.status(500);
        data = {'message':error.message}
    }
    return response.json(data);
}

//Funcion para editar datos médicos en la base de datos
async function editarDatosMedicos(request, response){
    let data = {"message":'Datos Médicos Modificados.'};
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
        response.status(500);
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