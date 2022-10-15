//jshint esversion:6
const { Op } = require("sequelize");
const {PlanAlimenticio}=require(`../../models`);
const {FilaPlan}=require(`../../models`);
// CONTROLADORES 

/**
 * nombre:Damaris Julissa Hernández Guardado
 * carnet:HG20040
 * estado:  DESARROLLO
 * fecha de creación: Sabado 15 de octubre del 2022
 * fecha de última edición: USTEDES
 * fecha de última revisión: ANDREA
 * fecha de aprobación: ANDREA
 */
 async function crearPlanAlimenticio(request,response){
    
    data={'message':"Plan Alimenticio Guardado."}
    consultaId=request.body.consultaId;
    filas=request.body.filas;
    let hoy = new Date();
    console.log(filas);
    try{
        
        const planAlimenticio = PlanAlimenticio.build({"fecha":hoy});
        
        if(planAlimenticio instanceof PlanAlimenticio){
            planAlimenticio.consultaId=consultaId;
            await planAlimenticio.save();//guardando en la base de datos
        }
        filas.forEach(async (fila) => {
            const filaPlan = FilaPlan.build(fila);
            filaPlan.PlanAlimenticioId=planAlimenticio.id;
       
            await filaPlan.save();//guardando en la base de datos
        
          },this);
       
    }catch(ex){
        data={'message':ex.message}
    }
    response.status(204).json(data);
 }






// EXPORTANDO CONTROLADORES
module.exports =  {
    crearPlanAlimenticio
    
};