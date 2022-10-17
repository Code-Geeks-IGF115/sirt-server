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

    data={'message':"Datos antropométricos guardados."}
    parametros=request.body;
    try{
        
        parametros.pesoActual=parseFloat(parametros.pesoActual).toFixed(2);
        parametros.pesoMeta=parseFloat(parametros.pesoMeta).toFixed(2);
        parametros.pesoIdeal=parseFloat(parametros.pesoIdeal).toFixed(2);
        parametros.grasaViceral=parseFloat(parametros.grasaViceral).toFixed(2);
        parametros.grasaMuscular=parseFloat(parametros.grasaMuscular).toFixed(2);
        parametros.cCintura=parseFloat(parametros.cCintura).toFixed(2);
        parametros.cCadera=parseFloat(parametros.cCadera).toFixed(2);
        parametros.cMuneca=parseFloat(parametros.cMuneca).toFixed(2);
        parametros.cBrazoRelajado=parseFloat(parametros.cBrazoRelajado).toFixed(2);
        parametros.cBrazoContraido=parseFloat(parametros.cBrazoContraido).toFixed(2);
        parametros.altura=parseFloat(parametros.altura).toFixed(2);
        parametros.indiceMasaCorporal=parseFloat(parametros.indiceMasaCorporal).toFixed(2);
        parametros.consultaId=parseInt(parametros.consultaId);
        console.log(parametros);
        await DatosAntropometricos.create(parametros);
    }catch(e){
        data={'message': e.message}
    }
    return response.json(data) //= { 'message': 'Datos medicos guardados' }
}

//EXPORTANDO CONTROLADORES
module.exports =  {
    crearDatosAntropometricos
};
