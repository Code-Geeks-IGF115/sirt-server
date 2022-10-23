const { Op } = require("sequelize");
const {HabitosConsumo}=require(`../../models`);

//controladores
async function crearHabitosConsumo (request,response){
data={'message':"Hábitos de Consumo Guardado."}
parametros=request.body;

try{
    const habitosConsumo = HabitosConsumo.build(parametros);
    if(habitosConsumo instanceof HabitosConsumo){
        await habitosConsumo.save();//guardando en la base de datos
    }
    data.id=habitosConsumo.id;
}catch(h){
    data = { 
        'message': "Datos no válidos.",
        "error": e.message
         }
}
response.json(data);
}

//ver los habitos de consumo
async function verHabitosConsumo (request,response){
    let data={}
    const id=request.params.id;
    try{
        // 
        const consum = await HabitosConsumo.findOne({
            attributes: { exclude: ['createdAt','updatedAt'] },
            where: {
                id:{
                    [Op.eq]: id
                }
                
            }
        });
        data=consum;
    }catch(e){
        // response.status(204);
        data = { 
            'message': "Datos no válidos.",
            "error": e.message
             }
        
    }
    return response.json(data);
}
//editar los habitos de consumo
async function editHabitosConsumo(request,response){
    let data={'message':"Hábitos de Consumo Modificados."}
    const id=request.params.id;
    const parametros=request.body;
    try{
        // recuperar todos las historias dietéticas
        await HabitosConsumo.update(
            parametros,
            {
                where: {
                    id:{
                        [Op.eq]: id
                    }
                }
            }
        );

    }catch(e){
        // response.status(204);
        data = { 
            'message': "Datos no válidos.",
            "error": e.message
            }
    }
    return response.json(data);
}


module.exports =  {
    crearHabitosConsumo,
    verHabitosConsumo,
    editHabitosConsumo,
};