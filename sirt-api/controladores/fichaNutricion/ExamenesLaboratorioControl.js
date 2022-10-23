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
async function crearHabitosConsumos(request, response) {
    let dato = { 'message': "Examen de laboratorio guardado" }
    parametros = request.body;
    let fechaPrescripcion = new Date();
    parametros.fechaPrescripcion=fechaPrescripcion;
    parametros.SeguimientoConsultumId=parseInt(parametros.seguimientoConsultaId);
    parametros.seguimientoConsultaId=parseInt(parametros.seguimientoConsultaId);
    try {
        const examenLaboratorio = ExamenLaboratorio.build(parametros);// se ejecuta a partir de la clase ExamenLaboratorio
        if (examenLaboratorio instanceof ExamenLaboratorio) {
            await examenLaboratorio.save();// se ejecuta sobre una variable (instancia)
        }
    } catch (error) {
        dato = { 'message': `Datos no válidos.` }
        response.status(500);
    }
    return response.json(dato);
}

//Funcion que recupera todos los datos de la base de datos
async function recuperarExamenes(request, response) {
    let dato = {}
    const ident = request.query.ident;
    try {
        const datosExamenes = await ExamenesLaboratorio.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            where: {
                ident: {
                    [Op.eq]: ident
                }
            }
        });
        dato = datosExamenes;
    } catch (error) {
        dato = { 'message': 'Datos no validos' }
    }
    return response.json(dato);
}

//Funcion para modificar los datos en la base
async function modificarDatos(request, response) {
    let dato = { 'message': 'Datos modificados con exito' }
    const id = request.params.id;
    try {
        const consulta = await ExamenesLaboratorio.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            where: {
                id: {
                    [Op.eq]: id
                }
            }
        })
    } catch (error) {
        dato = { 'message': 'La modificacion no pudo realizarse' }
    }
    return response.json(dato);
}

//Importacion de controladores a la clase
module.exports = {
    crearHabitosConsumo,
    recuperarExamenes,
    modificarDatos,
};

/**
 * Nota: Si hace falta alguna funcion, por favor notificarme de ello para poder añadirla
 * a la brevedad posible
 */