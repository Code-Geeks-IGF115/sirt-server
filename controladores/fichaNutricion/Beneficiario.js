const { Op } = require("sequelize");
const {Beneficiario,DatosMedicos}=require(`../../models`);


//CONTROLADORES
async function verBeneficario(request,response){
    let data={}
    const id = request.params.id;
    try{

        // recuperar la lista de beneficiario
        // const datosMedicos = await DatosMedicos.findOne({ 
        //     where: { beneficiarioId:id},
            
        // }); 
        // parametros.beneficiarioId = datos.id;
        const beneficiario = await Beneficiario.findOne({ 
            where: { 
                        id:{
                            [Op.eq]: id
                        }
                } ,
                include: ['datosMedicos']
            });
        // data.id=beneficiario.id;
        // [data]=[beneficiario,datosMedicos]
        data=beneficiario;

    } catch (e) {
        data = { 
            'message': "Datos no válidos.",
            "error": e.message
             }
    }
    return response.json(data);

}

module.exports =  {
    verBeneficario,
    
};