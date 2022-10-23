//jshint esversion:6
const { Op } = require("sequelize");
const { DatosAntropometricos } = require('../../models');
//CONTROLADORES

async function crearDatosAntropometricos(request, response) {

    let data = { 'message': "Datos antropométricos guardados." }
    let parametros = request.body;
    try {

        parametros.pesoActual = parseFloat(parametros.pesoActual).toFixed(2);
        parametros.pesoMeta = parseFloat(parametros.pesoMeta).toFixed(2);
        parametros.pesoIdeal = parseFloat(parametros.pesoIdeal).toFixed(2);
        parametros.grasaViceral = parseFloat(parametros.grasaViceral).toFixed(2);
        parametros.grasaMuscular = parseFloat(parametros.grasaMuscular).toFixed(2);
        parametros.cCintura = parseFloat(parametros.cCintura).toFixed(2);
        parametros.cCadera = parseFloat(parametros.cCadera).toFixed(2);
        parametros.cMuneca = parseFloat(parametros.cMuneca).toFixed(2);
        parametros.cBrazoRelajado = parseFloat(parametros.cBrazoRelajado).toFixed(2);
        parametros.cBrazoContraido = parseFloat(parametros.cBrazoContraido).toFixed(2);
        parametros.altura = parseFloat(parametros.altura).toFixed(2);
        parametros.indiceMasaCorporal = parseFloat(parametros.indiceMasaCorporal).toFixed(2);
        parametros.consultaId = parseInt(parametros.consultaId);
        const datosAntropometricos=await DatosAntropometricos.create(parametros);
        data.id=datosAntropometricos.id;
    } catch (e) {
        data = { 
            'message': "Datos no válidos.",
            "error": e.message
             }
    }
    return response.json(data) //= { 'message': 'Datos medicos guardados' }
}


async function verDatosAntropometricos(request, response) {
    let data = {}
    const id = request.params.id;

    try {
        const datosA = await DatosAntropometricos.findOne({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            where: {
                id: {
                    [Op.eq]: id
                }
            }
        });
        data = datosA;

    } catch (e) {
        data = { 
            'message': "Datos no válidos.",
            "error": e.message
             }
    }
    return response.json(data);

}


async function editarDatosAntropometricos(request, response) {
    let data = {};
    const id = request.params.id;
    let parametros = request.body;
    try {
        const datosAntropometricos = await DatosAntropometricos.update(
            parametros,
            {
                where: {
                id: {
                    [Op.eq]: id
                }
            }
        });
        data = { message: "Datos Antropometricos modificados." };

    } catch (e) {
        data = { 
            'message': "Datos no válidos.",
            "error": e.message
             }
    }
    return response.json(data);
}



//EXPORTANDO CONTROLADORES
module.exports = {
    crearDatosAntropometricos,
    verDatosAntropometricos,
    editarDatosAntropometricos
};
