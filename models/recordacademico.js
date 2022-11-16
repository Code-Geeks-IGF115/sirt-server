'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecordAcademico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.DatosAcademicos,{as: 'datosAcademicos'});
    }
  }
  RecordAcademico.init({
    materia: DataTypes.STRING,
    nota: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'RecordAcademico',
  });
  return RecordAcademico;
};