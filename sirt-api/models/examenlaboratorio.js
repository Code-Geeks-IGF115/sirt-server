'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExamenLaboratorio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ExamenLaboratorio.init({
    nombre: DataTypes.STRING,
    fechaPrescripcion: DataTypes.DATE,
    fechaRecepcion: DataTypes.DATE,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ExamenLaboratorio',
  });
  return ExamenLaboratorio;
};