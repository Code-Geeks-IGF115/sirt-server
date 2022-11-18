const { Op } = require("sequelize");
const { Beneficiario,Responsable,DatosMedicos } = require('../models');


//controladores
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
    return response.json(mensaje);//Devolviendo en JSON
}
/*
Nombre: Remberto Leonardo Escobar Ardón
Carnet: EA12006
Estado: en proceso
Fecha de creacion: 03/11/2022
Fecha de ultima edicion: 
Fecha de ultima revision:
Fecha de aprobacion:
*/


async function editarBeneficiario(request, response) {
    let data = {};
    const id = request.params.id;
    let parametros = request.body;
    try {
        await Beneficiario.update(
            parametros,
            {
                where: {
                id: {
                    [Op.eq]: id
                }
            }
        });
        await DatosMedicos.update(
            parametros,
            {
                where: {
                beneficiarioId: {
                    [Op.eq]: id
                }
            }
        });
        data = { message: "Datos Beneficiario modificados." };

    } catch (e) {
        data = { 
            'message': "Datos no válidos.",
            "error": e.message
             }
    }
    return response.json(data);
}

async function listaBeneficiarios(request, response) {
    let data = {}
    const dui = request.params.dui;

    try {
        const datosA = await Responsable.findOne({
            attributes: { 
                exclude: ['createdAt', 'updatedAt','telefono','direccion','fechaNacimiento'],
            },
            where: {
                dui: {
                    [Op.eq]: dui
                }
            },
            include: {
                model:Beneficiario,
                as: 'beneficiarios'
            }
        });
        data = datosA;

    } catch (e) {
        data = { 
            'message': "Datos no válidos.",
            "error": e.message
             }
    }
    return response.json(data);

}

//EXPORTANDO CONTROLADORES
module.exports = {
    editarBeneficiario,
    listaBeneficiarios,
    registrarBeneficiario    
};

