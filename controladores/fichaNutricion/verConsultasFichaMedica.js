//jshint esversion: 6
const{ Op } = require("sequelize");

//Modelo
const{ Beneficiario, sequelize } = require('../../models');


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