//jshint esversion:6
const { Op } = require("sequelize");
const {PlanAlimenticio,Consulta,FilaPlan}=require(`../../models`);

// CONTROLADORES 
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
        data.id=planAlimenticio.id;
             
    }catch(e){
        response.status(304);
        data = { 
            'message': "Datos no válidos.",
            "error": e.message
             }
    }
    // response.status(201);
    return response.json(data);
}

async function editarPlanAlimenticio(request,response){
    /**
     * Nota: El método modifica guarda los datos en la base de datos.
     */
    let data={'message':"Plan Alimenticio Modificado."}
    let id=request.params.id;
    //recuperando los parametros
    let {filas}=request.body;
    try{
        await FilaPlan.destroy({
            where: {
                PlanAlimenticioId:id
            }
          });
        filas.forEach(async (fila) => {
            //asignando el objeto creado plan alimenticio a la fila plan
            fila.PlanAlimenticioId=id;
            //creando la fila plan a partir de los datos proporcionados
            await FilaPlan.create(fila);          
        },this);
             
    }catch(e){
        response.status(304);
        data = { 
            'message': "Datos no válidos.",
            "error": e.message
             }
    }
    // response.status(201);
    return response.json(data);
}
async function verPlanAlimenticio(request,response){
    /**
     * Nota: El método modifica guarda los datos en la base de datos.
     */
    let data={'message':"Plan Alimenticio Modificado."}
    let id=request.params.id;
    try{

        const planAlimenticio=await FilaPlan.findAll({
            where: {
                PlanAlimenticioId:id
            },
            attributes: { 
                exclude: ['createdAt','updatedAt','PlanAlimenticioId']
             }
        });
        data=planAlimenticio;   
    }catch(e){
        // response.status(304);
        data = { 
            'message': "Datos no válidos.",
            "error": e.message
             }
    }
    // response.status(201);
    return response.json(data);
}





// EXPORTANDO CONTROLADORES
module.exports =  {
    crearPlanAlimenticio,
    editarPlanAlimenticio,
    verPlanAlimenticio
};