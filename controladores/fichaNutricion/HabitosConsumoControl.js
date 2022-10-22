const { Op } = require("sequelize");
const {HabitosConsumo}=require(`../../models`);


/**
 * nombre:Vinicio Alonso Sibrian Vargas
 * carnet:SV16028
 * estado: APROBADO || EN REVISIÓN || DESARROLLO
 * fecha de creación: 14/10/2022
 * fecha de última edición: 15/10/2022
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



module.exports =  {
    crearHabitosConsumo
};