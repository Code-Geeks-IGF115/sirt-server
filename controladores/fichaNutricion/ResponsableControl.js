//jshint esversion:6
const { Op } = require("sequelize");
const {Responsable}=require(`../../models`);

/**
 * nombre:Damaris Julissa Hernández Guardado
 * carnet:HG20040
 * estado:  En proceso 
 * fecha de creación: Miercoles 02 de noviembre del 2022
 * fecha de última edición:
 * fecha de última revisión: 
 * fecha de aprobación: 
 */
//CONTROLADORES
async function registrarResponsable(request,response){

    let data = {'message':"Responsable Registrado"}
    //recuperando los parametros
    let parametros=request.body;
    try{
        const responsable = Responsable.build(parametros);
        if(responsable instanceof Responsable){
            await responsable.save();//guardando en la base de datos
        }
    }catch(e){
        data = {
            'message':"Datos no válidos.",
            "error":e.message
        }
    }
    return response.json(data);
}

async function verResponsable(request,response){
let data={}
const dui = request.params.dui;
try{
    //recuperar todos los responsables 
    const responsables = await Responsable.findOne({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        where: {
            dui: {
                [Op.eq]: dui
            }

        }

    });
    data= responsables;
}catch(e){
    data = { 
        'message': "Datos no válidos.",
        "error": e.message
         }
}
return response.json(data);
}

//EXPORTANDO CONTROLADORES
module.exports={
registrarResponsable,
verResponsable
};