//jshint esversion:6
const { Op } = require("sequelize");
const {HistoriaDietetica}=require(`../../models`);
// CONTROLADORES 
async function crearHistoriaDietetica(request,response){
    data={'message':"Historia dietética guardada."}
    parametros=request.body;
    try{
        parametros.horasDeSueno=parseInt(parametros.horasDeSueno);
        const historiaDietetica = HistoriaDietetica.build(parametros);
        if(historiaDietetica instanceof HistoriaDietetica){
            await historiaDietetica.save();//guardando en la base de datos
        }
    }catch(e){
        data={'message':"Datos no válidos."}
    }
    response.json(data);
}


// EXPORTANDO CONTROLADORES
module.exports =  {
    crearHistoriaDietetica
};