'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CitaMedica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CitaMedica.init({
    fecha: DataTypes.DATE,
    descripcion: DataTypes.STRING,
    prioridad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CitaMedica',
  });
  return CitaMedica;
};