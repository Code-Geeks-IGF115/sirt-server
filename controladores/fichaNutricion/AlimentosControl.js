const { Op } = require("sequelize");
const {Alimento}=require(`../../models`);

/**
 * nombre:Vinicio Alonso Sibrian Vargas
 * carnet:SV16028
 * estado: APROBADO || EN REVISIÓN || DESARROLLO
 * fecha de creación: 17/10/2022
 * fecha de última edición: 21/10/2022
 * fecha de última revisión: 
 * fecha de aprobación: 
 */




//CONTROLADORES
async function verListaAlimentos(request,response){
    let data={}
    const id=request.params.id;
    try{
        // recuperar la lista de alimentos
        const registro = await Alimento.findAll({
            attributes: { exclude: ['createdAt','updatedAt'] },
            where: {
                id:{
                    [Op.eq]: id
                }
                
            },
            include: ['unidad']
        });
        data=registro;
    }catch(e){
        data={'message':e.message}
    }
    return response.json(data);
}

module.exports =  {
    verListaAlimentos
};