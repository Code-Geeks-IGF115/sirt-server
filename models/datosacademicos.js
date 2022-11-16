'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DatosAcademicos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Beneficiario,{as:'beneficiario'});
      this.hasMany(models.RecordAcademico,{as: 'recordAcademico'});
      this.belongsTo(models.Consulta,{as:'consulta'});

    }
  }
  DatosAcademicos.init({
    centroDeEstudio: DataTypes.STRING,
    nivelAcademicoEnCurso: DataTypes.STRING,
    gradoEnCurso: DataTypes.STRING,
    rendimientoAcademico: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DatosAcademicos',
  });
  return DatosAcademicos;
};