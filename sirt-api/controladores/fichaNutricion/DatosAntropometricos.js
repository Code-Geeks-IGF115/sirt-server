//jshint esversion:6
const { Op } = require("sequelize");
const { DatosAntropometricos } = require('../../models');

/*
*Nombre: Remberto Leonardo Escobar Ardón
*Carnet: EA12006
*Estado:
*Fecha de creacion: 15/10/22
*Fecha de ultima revision:
*Fecha de aprobacion:
*/



//CONTROLADORES

async function crearDatosAntropometricos(request,response){

    data={'message':"Datos antropometricos guardados."}
    parametros=request.body;
    try{
        
        parametros.pesoActual=parseFloat(parametros.pesoActual);
        parametros.pesoMeta=parseFloat(parametros.pesoMeta);
        parametros.pesoIdeal=parseFloat(parametros.pesoIdeal);
        parametros.grasaViseral=parseFloat(parametros.grasaViseral);
        parametros.grasaMuscular=parseFloat(parametros.grasaMuscular);
        parametros.cCintura=parseFloat(parametros.cCintura);
        parametros.cCadera=parseFloat(parametros.cCadera);
        parametros.cMuneca=parseFloat(parametros.cMuneca);
        parametros.cBrazoRelajado=parseFloat(parametros.cBrazoRelajado);
        parametros.cBrazoContraido=parseFloat(parametros.cBrazoContraido);
        parametros.altura=parseFloat(parametros.altura);
        parametros.indiceMasaCorporal=parseFloat(parametros.indiceMasaCorporal);
        parametros.consultaId=parseInt(parametros.consultaId);
        console.log(parametros);
        const datosAntropometricos = await DatosAntropometricos.create(parametros);
 //       if(datosAntropometricos instanceof DatosAntropometricos){
 //           await datosAntropometricos.save();
 //       }
    }catch(e){
        data={'message': e.message}
    }
    return response.json(data) //= { 'message': 'Datos medicos guardados' }
}

//EXPORTANDO CONTROLADORES
module.exports =  {
    crearDatosAntropometricos
};
