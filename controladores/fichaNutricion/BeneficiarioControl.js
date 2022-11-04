const { Op } = require("sequelize");
const { Beneficiario,Responsable,DatosMedicos } = require('../../models');
const beneficiario = require("../../models/beneficiario");


//controladores
/*
Nombre: Remberto Leonardo Escobar Ardón
Carnet: EA12006
Estado: en proceso
Fecha de creacion: 03/11/2022
Fecha de ultima edicion: 
Fecha de ultima revision:
Fecha de aprobacion:
*/


async function editarBeneficiario(request, response) {
    let data = {};
    const id = request.params.id;
    let parametros = request.body;
    try {
        const beneficiario = await Beneficiario.update(
            parametros,
            {
                where: {
                id: {
                    [Op.eq]: id
                }
            }
        });
        data = { message: "Datos Beneficiario modificados." };

    } catch (e) {
        data = { 
            'message': "Datos no válidos.",
            "error": e.message
             }
    }
    return response.json(data);
}

async function listaBeneficiarios(request, response) {
    let data = {}
    const dui = request.params.dui;

    try {
        const datosA = await Responsable.findAll({
            attributes: { 
                exclude: ['createdAt', 'updatedAt'],
                include: ['beneficiarios']
            },
            where: {
                dui: {
                    [Op.eq]: dui
                }
            },
        });
        data = datosA;

    } catch (e) {
        data = { 
            'message': "Datos no válidos.",
            "error": e.message
             }
    }
    return response.json(data);

}

//EXPORTANDO CONTROLADORES
module.exports = {
    editarBeneficiario,
    listaBeneficiarios    
};

