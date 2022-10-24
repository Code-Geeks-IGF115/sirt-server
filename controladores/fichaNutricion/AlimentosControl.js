const { Op } = require("sequelize");
const {Alimento}=require(`../../models`);

//CONTROLADORES
async function verListaAlimentos(request,response){
    let data={}
    try{
        // recuperar la lista de alimentos
        const registro = await Alimento.findAll({
            attributes: { exclude: ['createdAt','updatedAt'] },
            include: ['unidad']
        });
        data=registro;
    }catch(e){
        data = { 
            'message': "Datos no válidos.",
            "error": e.message
             }
    }
    return response.json(data);
}

module.exports =  {
    verListaAlimentos
};