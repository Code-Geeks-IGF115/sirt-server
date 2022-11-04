const { Op } = require("sequelize");
const { Beneficiario, DatosMedicos } = require(`../../models`);

/**
 * Nombre: Pamela Nicole Barrientos Cruz
 * Carnet: BC21009
 * Estado: En proceso
 * Fecha de creación: 2/11/2022
 * Fecha de última edición: 2/11/2022
 * Fecha de última revisión:
 * Fecha de aprobación: 
 */

//Funcion de registrar los beneficiarios (tarea no.52)
async function registrarBeneficiario(request, response) {
    let mensaje = { 'message': 'Beneficiario guardado con éxito' }
    let parametros = request.body;
    const dui = request.params.dui;
    //Programando la consulta y la excepción
    try {
        parametros.responsableDui=dui;
        parametros.ResponsableDui=dui;
        const benef = Beneficiario.build(parametros);
        if (benef instanceof Beneficiario) {
            await benef.save();
        }
        
        parametros.beneficiarioId=benef.id;
        const datosMedicos= await DatosMedicos.create(parametros);

    } catch (error) {
        mensaje = {
            'message':'Error; los datos son incorrectos',
            "error:":error.message 
        }
    }
    response.json(mensaje);//Devolviendo en JSON
}

//Funcion para ver los beneficiarios (tarea no. 53)



//Exportacion de controladores
module.exports={
    registrarBeneficiario
};