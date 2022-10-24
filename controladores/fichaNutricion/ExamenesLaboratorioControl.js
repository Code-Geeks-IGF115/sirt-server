const { Op } = require("sequelize");
const { ExamenLaboratorio } = require(`../../models`);

//Controladores
/*
Nombre: Pamela Nicole Barrientos Cruz
Carnet: BC21009
Estado:
Fecha de creacion: 14/10/2022
Fecha de ultima edicion: 16/10/2022
Fecha de ultima revision:
Fecha de aprobacion:
*/

//Funcion de construccion del objeto
async function crearExamenLaboratorio(request, response) {
    let data = { 'message': "Examen de laboratorio guardado." }
    parametros = request.body;
    let fechaPrescripcion = new Date();
    parametros.fechaPrescripcion=fechaPrescripcion;
    parametros.BeneficiarioId=parseInt(parametros.beneficiarioId);
    parametros.beneficiarioId=parseInt(parametros.beneficiarioId);
    try {
        const examenLaboratorio = ExamenLaboratorio.build(parametros);// se ejecuta a partir de la clase ExamenLaboratorio
        if (examenLaboratorio instanceof ExamenLaboratorio) {
            await examenLaboratorio.save();// se ejecuta sobre una variable (instancia)
            data.id=examenLaboratorio.id;
        }
    } catch (error) {
        data = { 
            'message': "Datos no válidos.",
            "error": error.message
             }
        // response.status(500);
    }
    return response.json(data);
}

//Funcion que recupera todos los datos de la base de datos
async function verExamenesLaboratorio(request, response) {
    let data = {}
    const id = request.params.id;
    //Filtra por beneficiario
    try {
        const datosExamenes = await ExamenLaboratorio.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            where: {
                beneficiarioId: {
                    [Op.eq]: id
                }
            }
        });
        data = datosExamenes;
    } catch (error) {
        data = { 
            'message': "Datos no válidos.",
            "error": error.message
             }
    }
    return response.json(data);
}

//Funcion para modificar los datos en la base
async function editarExamenLaboratorio(request, response) {
    let data = { 'message': 'Datos modificados con exito' }
    const id = request.params.id;
    try {
        await ExamenLaboratorio.update(
            request.body,
            {
                where: {
                    id: {
                        [Op.eq]: id
                    }
                }
            }
            );
    } catch (error) {
        data = { 
            'message': "Datos no válidos.",
            "error": error.message
             }
    }
    return response.json(data);
}

//Importacion de controladores a la clase
module.exports = {
    crearExamenLaboratorio,
    verExamenesLaboratorio,
    editarExamenLaboratorio
};

/**
 * Nota: Si hace falta alguna funcion, por favor notificarme de ello para poder añadirla
 * a la brevedad posible
 */