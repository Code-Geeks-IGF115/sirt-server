const { Op } = require("sequelize");
const { PlanTerapeutico } = require('../../models');

/*
Nombre: Vinicio Alonso Sibrian Vargas
Carnet: SV16028
Estado: en proceso
Fecha de creacion: 17/11/2022
Fecha de ultima edicion: 
Fecha de ultima revision:
Fecha de aprobacion:
*/

async function EditPlanTerapeutico(request, response){
    let data = {"message":'plan terapeutico guardado .'};
    const id = request.params.idConsulta;
   
    const parametros=request.body;
    try {
        await PlanTerapeutico.update(
            parametros,
            {
                where: {
                    consultaId: {
                        [Op.eq]: id
                    }
                }
            });
          

    } catch (error) {
        data = { 
            'message': "Datos no válidos.",
            "error": error.message
             }
    }
    return response.json(data);
}


//Exportacion de controladores
module.exports = {
    EditPlanTerapeutico
   
};
