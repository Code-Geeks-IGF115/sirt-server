const { Op } = require("sequelize");
const { Consulta, PlanTerapeutico } = require(`../models`);

/**
 * Nombre: Pamela Nicole Barrientos Cruz
 * Carnet: BC21009
 * Fecha de creación: 18/11/2022
 * Fecha de revisión:
 * Fecha de última edición: 18/11/2022
 * Fecha de aprobación:
 */

/*
 *Esta función consulta al modelo consultas para devolver un 
 * plan terapéutico en formato JSON
 */

async function verPlanTerapeutico(request, response) {
    let data = {};
    const iD = request.params.iD;

    try {
        const planesTerapeuticos = await PlanTerapeutico.findOne({
            attributes: {Exclude: ['createdAt','updatedAt']},
            where: {
                iD: {
                    [Op.eq]: iD
                }

            }
        });
        data = planesTerapeuticos;

    } catch (error) {
        data={
            'message':"Error al recuperar los datos",
            "Error":error.message
        }
    }
    return response.json(data);
}

//Exportando modelos
module.exports={
    verPlanTerapeutico
};