const { Op } = require("sequelize");
const {Beneficiario,DatosMedicos}=require(`../../models`);


//CONTROLADORES
async function verBeneficario(request,response){
    let data={}
    //const id = request.params.id;
    let { beneficiarioId, ...parametros } = request.body;
    try{
        // recuperar la lista de beneficiario
        const datos = await DatosMedicos.findAll({ where: { id: parseInt(beneficiarioId) } }); 
        parametros.beneficiarioId = datos.id;
        const beneficiario = await Beneficiario.create(parametros);
        data.id=beneficiario.id;


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