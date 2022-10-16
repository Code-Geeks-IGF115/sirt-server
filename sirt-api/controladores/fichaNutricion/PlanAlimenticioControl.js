//jshint esversion:6
const { Op } = require("sequelize");
const {PlanAlimenticio,Consulta,FilaPlan,Alimento}=require(`../../models`);

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
    /**
     * Nota: El método create guarda los datos en la base de datos.
     */
    let data={'message':"Plan Alimenticio Guardado."}
    let hoy = new Date();
    //recuperando los parametros
    let {consultaId,filas}=request.body;
    try{
        
        //recuperando consulta
        const consulta = await Consulta.findOne({ where: { id: parseInt(consultaId)} });
        
        //creando el plan alimenticio y asignando la consulta
        const planAlimenticio = await PlanAlimenticio.create(
            {
                "fecha": hoy,
                "consultaId": consulta.id
            });
    
        filas.forEach(async (fila) => {
            //asignando el objeto creado plan alimenticio a la fila plan
            fila.PlanAlimenticioId=planAlimenticio.id;
            //creando la fila plan a partir de los datos proporcionados
            await FilaPlan.create(fila);          
        },this);
        
             
    }catch(e){
        response.status(304);
        data={'message':e.message}
    }
    response.status(201);
    return response.json(data);
}






// EXPORTANDO CONTROLADORES
module.exports =  {
    crearPlanAlimenticio
    
};