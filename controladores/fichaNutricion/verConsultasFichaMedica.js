//jshint esversion: 6
const{ Op } = require("sequelize");

//Modelo
const{ Beneficiario, sequelize } = require('../../models');

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
async function listaConsultasFichaMedica(request, response){
    let data = {"message": "succes"};
    const id = request.params.id;

    try {
        const benificiario = await Beneficiario.findOne({
            attributes: { exclude : ['createdAt', 'updatedAt'] },
            where: {
                id:{
                    [Op.eq]: id
                }
            }
        });

        data = beneficiario;

    } catch (error) {
        data = {
            "message": "error al consultar lista",
            "message" : error.message
        }
    }

    return response.json(data);
}

module.exports = {
    listaConsultasFichaMedica
};