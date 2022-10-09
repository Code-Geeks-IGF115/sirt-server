'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Familiar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Familiar.init({
    dui: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    reponsable: DataTypes.BOOLEAN,
    fechaNacimiento: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Familiar',
  });
  return Familiar;
};