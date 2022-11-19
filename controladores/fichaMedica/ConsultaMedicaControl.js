//jshint esversion: 6
const{ Op } = require("sequelize");

//Modelo
const{ Beneficiario, Consulta } = require('../../models');


//Funcion
async function listaConsultasFichaMedica(request, response){
    let data = {"message": "succes"};
    const id = request.params.id;
    try {
        const datoA = await Beneficiario.findOne({
            attributes: { exclude : ['createdAt', 'updatedAt'] },
            where: {
                id:{
                    [Op.eq]: id
                }
            },
            include: {
                model: Consulta, as: 'consultas',
                where: {
                    fichaId: 2
                },
            }
        });

        data = datoA;

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