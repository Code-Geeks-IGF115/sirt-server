'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FilaPlan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FilaPlan.init({
    cantidadSubtotal: DataTypes.DECIMAL,
    proteinasSubtotal: DataTypes.DECIMAL,
    grasasSubtotal: DataTypes.DECIMAL,
    carbohidratosSubtotal: DataTypes.DECIMAL,
    caloriasSubtotal: DataTypes.DECIMAL,
    dia: DataTypes.STRING,
    tiempo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FilaPlan',
  });
  FilaPlan.removeAttribute('id');
  return FilaPlan;
};