const { Op } = require("sequelize");
const { PlanTerapeutico } = require('../../models');

/*
Nombre: Vinicio Alonso Sibrian Vargas
Carnet: SV16028
Estado: en proceso
Fecha de creacion: 17/11/2022
Fecha de ultima edicion: 
Fecha de ultima revision:
Fecha de aprobacion:
*/

async function EditPlanTerapeutico(request, response){
    let data = {};
    const idConsulta = request.params.idConsulta;
    const parametros=request.body;
    try {
        await PlanTerapeutico.update(
            parametros,
            {
                where: {
                    consultaId: {
                        [Op.eq]: idConsulta
                    }
                }
            });
            data = { message: "plan terapeutico modificado." };
          

    } catch (error) {
        data = { 
            'message': "Datos no válidos.",
            "error": error.message
             }
    }
    return response.json(data);
}

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
    const idConsulta = request.params.idConsulta;
    try {
        const planesTerapeuticos = await PlanTerapeutico.findOne({
            attributes: { Exclude: ['createdAt', 'updatedAt'] },

            where: {
                consultaId: {
                    [Op.eq]: idConsulta
                }
            }
        });
        data = planesTerapeuticos;

    } catch (error) {
        data = {
            'message': "Error al recuperar los datos",
            "Error": error.message
        }
    }
    return response.json(data);
}


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
// REPARAR
async function crearPlanTerapeutico(request, response) {
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
                "Error al crear Consulta",
            "message":
                error.message
        }
    }
    return response.json(data);
}

//Exportacion de controladores
module.exports = {
    EditPlanTerapeutico,
    verPlanTerapeutico,
    crearPlanTerapeutico
};
