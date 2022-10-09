'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Responsable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Beneficiario,{as: 'Beneficiarios'});
    }
  }
  Responsable.init({
    dui: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Responsable',
  });
  return Responsable;
};