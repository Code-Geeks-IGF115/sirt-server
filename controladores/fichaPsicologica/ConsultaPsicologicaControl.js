const { Op } = require("sequelize");
const { Consulta,Beneficiario,PlanTerapeutico, Usuario} = require(`../../models`);

//Funcion para ver las consultas
async function listaConsultasFichaPsicologica(request, response) {
    let dato = {}
    const id = request.params.id;
    //comprobando consulta
    try {
        //Se recuperarán todos las lista de consultas de la ficha psicológica del beneficiario
        const fichaPsicologica = await PlanTerapeutico.findAll({
            attributes: { 
                exclude: [
                    'createdAt', 
                    'updatedAt',
                ],
            },
            include:[
                {     
                   model: Consulta,
                   as: 'consulta',
                   where:{
                       'fichaId': 4,
                       'beneficiarioId':id
                   },
                   include:{
                       model: Usuario,
                       as: 'doctor'
                   }
               }

           ]
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
    listaConsultasFichaPsicologica
};