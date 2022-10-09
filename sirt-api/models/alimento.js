'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alimento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.PlanAlimenticio,{through:models.FilaPlan});
    }
  }
  Alimento.init({
    nombre: DataTypes.STRING,
    cantidad: DataTypes.DECIMAL,
    proteinas: DataTypes.DECIMAL,
    grasas: DataTypes.DECIMAL,
    carbohidratos: DataTypes.DECIMAL,
    calorias: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Alimento',
  });
  return Alimento;
};