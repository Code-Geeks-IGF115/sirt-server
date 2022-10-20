//jshint esversion:6
const { Op } = require("sequelize");
const { HistoriaDietetica, Consulta } = require(`../../models`);

// CONTROLADORES 

/**
 * nombre:Damaris Julissa Hernández Guardado
 * carnet:HG20040
 * estado:  DESARROLLO
 * fecha de creación: Jueves 13 de octubre del 2022
 * fecha de última edición: Jueves 20 de octubre del 2022
 * fecha de última revisión: ANDREA
 * fecha de aprobación: ANDREA
 */
async function crearHistoriaDietetica(request, response) {

    let data = { 'message': "Historia Dietética Guardada." }
    let { consultaId, parametros } = request.body;
    try {
        const consulta = await Consulta.findOne({ where: { id: parseInt(consultaId) } });
        parametros.horasDeSueno = parseInt(parametros.horasDeSueno);
        const historiaDietetica = await HistoriaDietetica.create(
            {

                "parametros": parametros,
                "consultaId": consulta.id
            });
        if (historiaDietetica instanceof HistoriaDietetica) {
            await historiaDietetica.save();//guardando en la base de datos
        }
    } catch (e) {
        response.status(304);
        data = { 'message': e.message }
    }
    response.status(201);
    return response.json(data);
}

async function verHistoriasDieteticas(request, response) {
    let data = {}
    const id = request.query.id;
    try {
        // recuperar todos las historias dietéticas
        const historias = await HistoriaDietetica.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        });
        data = historias;
    } catch (e) {
        data = { 'message': "Datos no válidos." }
    }
    response.json(data);
}

//para filtrar datos por nombre, apellidos, categorías
//usando parametros de consulta localhost:3000/ficha/nutricion/consulta/historia-dietetica/?id=2
async function verHistoriasDieteticas2(request, response) {
    let data = {}
    const id = request.query.id;
    try {
        // recuperar todos las historias dietéticas
        const historias = await HistoriaDietetica.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            where: {
                id: {
                    [Op.eq]: id
                }

            }
        });
        data = historias;
    } catch (e) {
        data = { 'message': "Datos no válidos." }
    }
    response.json(data);
}

//para editar, eliminar y ver objectos de la base de datos
//usando parametros localhost:3000/ficha/nutricion/consulta/historia-dietetica/:id
// localhost:3000/ficha/nutricion/consulta/historia-dietetica/2
async function verHistoriasDieteticas3(request, response) {
    let data = {}
    const id = request.params.id;
    try {
        // recuperar todos las historias dietéticas
        const historias = await HistoriaDietetica.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            where: {
                id: {
                    [Op.eq]: id
                }

            }
        });
        data = historias;
    } catch (e) {
        data = { 'message': "Datos no válidos." }
    }
    response.json(data);
}
// EXPORTANDO CONTROLADORES
module.exports = {
    crearHistoriaDietetica,
    verHistoriasDieteticas,
    verHistoriasDieteticas2,
    verHistoriasDieteticas3,
};