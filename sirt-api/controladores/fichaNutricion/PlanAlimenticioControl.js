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
    
    let data={'message':"Plan Alimenticio Guardado."}
    //recuperando el id de la consulta
    let consultaId=request.body.consultaId;
    let filas=request.body.filas;
    let hoy = new Date();
    try{
        //recuperando consulta
        const consulta = await Consulta.findOne({ where: { id: parseInt(consultaId)} });
        
        //creando el plan alimenticio y asignando la consulta
        const planAlimenticio = PlanAlimenticio.create(
            {
                "fecha": hoy,
                "consulta": consulta
            },
            {
                include: [{
                    association: Consulta,
                    as: 'consulta'
                  }]
            });

        if(planAlimenticio instanceof PlanAlimenticio){
            //guardando en la base de datos
            await planAlimenticio.save();
        }else{
            throw 'Datos del plan alimenticio no válidos.';
        }
        // //recuperando todos los alimentos de la base de datos
        // const alimentos=  await Alimento.findAll();
        // console.log(alimentos[0]);
        // filas.forEach(async (fila) => {
        //     //asignando el objeto creado plan alimenticio a la fila plan
        //     fila.planAlimenticio=planAlimenticio;
            
        //     //recuperando alimento
        //     let alimento=alimentos.filter(alimento => alimento.id == fila.AlimentoId);
            
        //     //asignando alimento a la fila plan
        //     fila.alimento=alimento;
            
        //     //creando la fila plan a partir de los datos proporcionados
        //     const filaPlan = FilaPlan.build(
        //         fila,
        //         {
        //             include: [ PlanAlimenticio ],
        //             as: 'planAlimenticio'
        //         },
        //         {
        //             include: [ Alimento ],
        //             as: 'alimento'
        //         }
        //         );
                
        //         await filaPlan.save();//guardando en la base de datos
                
        //     },this);
            
        }catch(e){
            data={'message':e.message}
            return response.status(500).json(data);
        }
            
            response.json(data);
        }






// EXPORTANDO CONTROLADORES
module.exports =  {
    crearPlanAlimenticio
    
};