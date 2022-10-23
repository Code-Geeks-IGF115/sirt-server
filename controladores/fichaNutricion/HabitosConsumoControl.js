const { Op } = require("sequelize");
const {HabitosConsumo}=require(`../../models`);


/**
 * nombre:Vinicio Alonso Sibrian Vargas
 * carnet:SV16028
 * estado: APROBADO || EN REVISIÓN || DESARROLLO
 * fecha de creación: 14/10/2022
 * fecha de última edición: 21/10/2022
 * fecha de última revisión: 
 * fecha de aprobación: 
 */

//controladores
async function crearHabitosConsumo (request,response){
data={'message':"Hábitos de Consumo Guardado."}
parametros=request.body;

try{
    const habitosConsumo = HabitosConsumo.build(parametros);
    if(habitosConsumo instanceof HabitosConsumo){
        await habitosConsumo.save();//guardando en la base de datos
    }
}catch(h){
    data={'message':"Datos no válidos."}
}
response.json(data);
}

//ver los habitos de consumo
async function verHabitosConsumo (request,response){
    let data={}
    const id=request.params.id;
    try{
        // 
        const consum = await HabitosConsumo.findAll({
            attributes: { exclude: ['createdAt','updatedAt'] },
            where: {
                id:{
                    [Op.eq]: id
                }
                
            }
        });
        data=consum;
    }catch(e){
        response.status(204);
        data={'message':e.message}
        
    }
    response.json(data);
}
//editar los habitos de consumo
async function editHabitosConsumo(request,response){
    let data={'message':"Hábitos de Consumo Guardado."}
    const id=request.params.id;
    try{
        // recuperar todos las historias dietéticas
        const editHistorias = await HabitosConsumo.findAll({
            attributes: { exclude: ['createdAt','updatedAt'] },
            where: {
                id:{
                    [Op.eq]: id
                }
                
            }
        });
        data={id,message:"Los habitos de consumo han sido guardados"};
    }catch(e){
        response.status(500);
        data={'message':e.message}
    }
    response.json(data);
}


module.exports =  {
    crearHabitosConsumo,
    verHabitosConsumo,
    editHabitosConsumo,
};