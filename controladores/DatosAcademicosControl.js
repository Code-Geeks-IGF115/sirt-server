//jshint esversion:6
const { Op } = require("sequelize");
const { DatosAcademicos, RecorAcademico } = require(`../models`);

//CONTROLADORES 
/**
 * nombre:Damaris Julissa Hernández Guardado
 * carnet:HG20040
 * estado:  En proceso 
 * fecha de creación: viernes 18 de noviembre del 2022
 * fecha de última edición:
 * fecha de última revisión: 
 * fecha de aprobación: 
 */
async function editarDatosAcademicos(request, response) {
    let data = {}
    //recuperando los parametros
    const id = request.params.id;
    const parametros = request.body;
    try {
        await DatosAcademicos.update(
            parametros,
            {
                where: {
                    beneficiarioId: {
                        [Op.eq]: id
                    }

                }
            },
            {
                where: {
                    consultaId: {
                        [Op.eq]: id
                    }

                }
            }
        );
        await RecorAcademico.update(
            parametros,
            {
                where: {
                    RecordAcademicoId: {
                        [Op.eq]: id
                    }
                }

            });
        data = { "message": "Datos Academicos  Modificados." }
    }
    catch (e) {
        data = {
            "message": "Datos no válidos.",
            "error": e.message
        }
    }
    return response.json(data);


}
//EXPORTANDO CONTROLADORES 
module.exports = {
    editarDatosAcademicos
}
