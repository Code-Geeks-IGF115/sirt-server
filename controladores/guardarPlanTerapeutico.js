//jshint esversion:6
const { Op } = require('sequelize');
const { PlanTerapeutico } = require('../models');//modelo

/**
 * Nombre: Jorge Daniel Cruz Vásquez
 * Carnet: CV190008
 * Estado: En proceso
 * Fecha de creación: 18/11/2022
 * Fecha de última edición: 
 * Fecha de última revisión:
 * Fecha de aprobación: 
 */

//Funcion
async function crearConsultaYPlanTerapeutico(request, response) {
    let data = {};
    params = request.body;//recuperando los parametros
    let id = request.params.id;//recuperando id de la ruta

    //Instancia
    try {
        //params.consultaId = id; <-- falta consultaId no guarda
        const planTerapeutico = PlanTerapeutico.build(params);
        if (planTerapeutico instanceof PlanTerapeutico) {
            await planTerapeutico.save();
        }
        data = { "message": "Consulta id: " + id + " creada!" };
        //console.log(planTerapeutico);

    } catch (error) {
        data = {
            "message":
                "error al crear Consulta",
            "message":
                error
        }
    }
    return response.json(data);
}

module.exports = {
    crearConsultaYPlanTerapeutico,
};
