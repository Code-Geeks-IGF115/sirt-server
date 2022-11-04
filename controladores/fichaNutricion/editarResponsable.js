//jshint esversion: 6
const{ Op } = require("sequelize");
//Modelo
const{ Responsables, sequelize } = require('../../models');

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