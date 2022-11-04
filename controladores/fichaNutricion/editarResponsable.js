//jshint esversion: 6
const{ Op } = require("sequelize");
//Modelo
const{ Responsables, sequelize } = require('../../models');

/**
 * nombre: Jorge Daniel Cruz Vásquez
 * carnet: CV19008
 * estado: Proceso
 * fecha de creación: 02/11/22
 * fecha de última edición: 03/11/2022
 * fecha de última revisión: 
 * fecha de aprobación: 
 */

//Funcion
async function editarResponsable(request, response){
    let data = {"message" : "Responsable Guardado"}
    const dui = request.params.dui;
    const parametros = request.body;

    try {
        await Responsables.Update(
            parametros,
            {
            where:{
                dui:{
                    [Op.eq]: dui
                }
            }
        });
        data = {"message" : "Responsable Modificado"};

    } catch (error) {
        data = {
            "message" : "Error al modificar el Responsable",
             "error" : error.message
            }
    }
    return response.json(data);
}

//Exportando funcion
module.exports = {
    editarResponsable
};