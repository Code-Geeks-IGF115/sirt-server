//jshint esversion:6
const { Op } = require("sequelize");

//CONTROLADORES

async function crearDatosAntropometricos(request,response){
    response.status(200);
    response.json({data:"Datos Antropometricos Guardados."});
}

//EXPORTANDO CONTROLADORES
module.exports =  {
    crearDatosAntropometricos
};
