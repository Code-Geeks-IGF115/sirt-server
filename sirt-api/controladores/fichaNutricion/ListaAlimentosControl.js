const { Op } = require("sequelize");
const {Alimento}=require(`../../models`);

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
                
            }
        });
        data=registro;
    }catch(e){
        data={'message':"Datos no válidos."}
    }
    response.json(data);
}

module.exports =  {
    verListaAlimentos
};