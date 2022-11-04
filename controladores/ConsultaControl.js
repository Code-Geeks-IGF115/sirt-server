const { Op } = require("sequelize");
const { Consulta } = require(`../models`);

/**
 * Nombre: Pamela Nicole Barrientos Cruz
 * Carnet: BC21009
 * Estado: En proceso
 * Fecha de creación: 4/11/2022
 * Fecha de última edición: 4/11/2022
 * Fecha de última revisión:
 * Fecha de aprobación: 
 */

//Funcion para ver las consultas
async function listaConsultasFichaNutricion(request, response) {
    let dato = {}
    const dui = request.params.dui;
    //Probando consulta
    try {
        //Se recuperarán todos los beneficiarios
        const beneficiarios = await Consulta.findOne({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            where: {
                dui: {
                    [Op.eq]: dui
                },
                include: {
                    model: Consulta,
                    as: consultas
                }

            }
        })
        dato = beneficiarios;
    } catch (error) {
        dato = {
            'message': "Datos incorrectos",
            "error": error.message
        }
    }
    return response.json(dato);
}