'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HabitosConsumo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HabitosConsumo.init({
    leche: DataTypes.STRING,
    vegetales: DataTypes.STRING,
    panFrances: DataTypes.STRING,
    comidaChatarra: DataTypes.STRING,
    cafe: DataTypes.STRING,
    carne: DataTypes.STRING,
    yogurt: DataTypes.STRING,
    fruta: DataTypes.STRING,
    tortilla: DataTypes.STRING,
    dulces: DataTypes.STRING,
    pollo: DataTypes.STRING,
    pescado: DataTypes.STRING,
    otros: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HabitosConsumo',
  });
  return HabitosConsumo;
};