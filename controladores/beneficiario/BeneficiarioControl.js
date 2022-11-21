const { Op } = require("sequelize");
const { Beneficiario,Responsable,DatosMedicos } = require('../../models');


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
        const benef = Beneficiario.build(parametros);
        if (benef instanceof Beneficiario) {
            await benef.save();
            mensaje.beneficiarioId=benef.id;
        }
        
        const datosMedicos= await DatosMedicos.create(parametros);
        datosMedicos.beneficiarioId=benef.id;
        datosMedicos.datosMedicoId=benef.id;
        // datosMedicos.datosMedicoId=datosMedicos.id;
        datosMedicos.save();
        mensaje.datosMedicosId=datosMedicos.id;

    } catch (error) {
        mensaje = {
            'message':'Error; los datos son incorrectos',
            "error:":error.message 
        }
    }
    return response.json(mensaje);//Devolviendo en JSON
}


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
                include: 
                   {
                     model: DatosMedicos,
                    as: 'datosMedicos'
                }
                
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
    registrarBeneficiario,
    verBeneficario,
};

