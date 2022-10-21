//jshint esversion:6
const {Op} = require("sequelize");
//MODELO
const {Recordatorio24H} = require('../../models');

/**
 * nombre: Jorge Daniel Cruz Vásquez
 * carnet: CV19008
 * estado: DESARROLLO
 * fecha de creación: 14/10/22
 * fecha de última edición: 
 * fecha de última revisión: --
 * fecha de aprobación: 
 */

//CONTROLADORES
async function crearRecordatorio24H (request,response){
    let data = {"message": "Recordatorio de 24 horas guardado."};
    let parametros = request.body;
    //var horaDesayuno, horaAlmuerzo, horaCena;
    //try-cath no, porque no puede enviar otro tipo de paramatros
    
    /*let hms = new Date();
    let horas = parseInt(parametros.horaDesayuno.substring(0, 2));
    let minutos = parseInt(parametros.horaDesayuno.substring(3, 5));
    let convert = (minutos + (horas * 60)) * 60 * 1000;
    hms.setTime(convert);
    parametros.horaDesayuno = hms;*/
    //CREANDO INSTANCIA
    try {
            const recordatorio24H = Recordatorio24H.build(parametros);
        if(recordatorio24H instanceof Recordatorio24H){//devolvió true, es una instancia de Recordatorio24H
            await recordatorio24H.save();//guardando en base de datos
            console.log(parametros);//imprimiendo parametros
        }
    } catch (error) {
        console.log(error.message);
        return response.json(data);
    }
    
    
    return response.json(data);
}

async function verRecordatorio24H(request,response){
    data = {}
    parametros = request.query.id;
    console.log(parametros);
    try {
        
    } catch (error) {
        
    }
    response.json(data);
}

//EXPORTANDO CONTROLADORES
module.exports =  {
    crearRecordatorio24H,
    verRecordatorio24H
};