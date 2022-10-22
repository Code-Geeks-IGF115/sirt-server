//jshint esversion:6
const { Op } = require("sequelize");
const {HistoriaDietetica}=require(`../../models`);

// CONTROLADORES 

/**
 * nombre:Damaris Julissa Hernández Guardado
 * carnet:HG20040
 * estado:  DESARROLLO
 * fecha de creación: Jueves 13 de octubre del 2022
 * fecha de última edición: USTEDES
 * fecha de última revisión: ANDREA
 * fecha de aprobación: ANDREA
 */
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
        data={'message':"Internal Server Error."}
    }
    response.json(data);
}

async function verHistoriasDieteticas(request,response){
    let data={}
    const id=request.query.id;
    try{
        // recuperar todos las historias dietéticas
        const historias = await HistoriaDietetica.findAll({
            attributes: { exclude: ['createdAt','updatedAt'] }
        });
        data=historias;
    }catch(e){
        data={'message':"Datos no válidos."}
    }
    response.json(data);
}

//para filtrar datos por nombre, apellidos, categorías
//usando parametros de consulta localhost:3000/ficha/nutricion/consulta/historia-dietetica/?id=2
async function verHistoriasDieteticas2(request,response){
    let data={}
    const id=request.query.id;
    try{
        // recuperar todos las historias dietéticas
        const historias = await HistoriaDietetica.findAll({
            attributes: { exclude: ['createdAt','updatedAt'] },
            where: {
                id:{
                    [Op.eq]: id
                }
                
            }
        });
        data=historias;
    }catch(e){
        data={'message':"Datos no válidos."}
    }
    response.json(data);
}

//para editar, eliminar y ver objectos de la base de datos
//usando parametros localhost:3000/ficha/nutricion/consulta/historia-dietetica/:id
// localhost:3000/ficha/nutricion/consulta/historia-dietetica/2
async function verHistoriasDieteticas3(request,response){
    let data={}
    const id=request.params.id;
    try{
        // recuperar todos las historias dietéticas
        const historias = await HistoriaDietetica.findAll({
            attributes: { exclude: ['createdAt','updatedAt'] },
            where: {
                id:{
                    [Op.eq]: id
                }
                
            }
        });
        data=historias;
    }catch(e){
        data={'message':"Datos no válidos."}
    }
    response.json(data);
}
// EXPORTANDO CONTROLADORES
module.exports =  {
    crearHistoriaDietetica,
    verHistoriasDieteticas,
    verHistoriasDieteticas2,
    verHistoriasDieteticas3,
};