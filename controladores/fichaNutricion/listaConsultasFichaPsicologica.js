const { Op } = require("sequelize");
const { Consulta,Beneficiario,Ficha} = require(`../../models`);

//Funcion para ver las consultas
async function consultasPsicologicas(request, response) {
    let dato = {}
    const id = request.params.id;
    //comprobando consulta
    try {
        //Se recuperarán todos las lista de consultas de la ficha psicológica del beneficiario
        const fichaPsicologica = await Beneficiario.findOne({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            where: {
                id: {
                    [Op.eq]: id
                },
                include: {
                    model:Consulta,
                    as: 'consultas'
                }

            }
        })
        dato = fichaPsicologica;
    } catch (error) {
        dato = {
            'message': "Datos incorrectos",
            "error": error.message
        }
    }
    return response.json(dato);
}

module.exports =  {
    consultasPsicologicas
};