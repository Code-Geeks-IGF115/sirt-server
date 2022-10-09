'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class signosVitales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Beneficiario,{as: 'Beneficiario'});
    }
  }
  signosVitales.init({
    altura: DataTypes.DECIMAL,
    presion: DataTypes.STRING,
    saturacionOxigeno: DataTypes.DECIMAL,
    peso: DataTypes.DECIMAL,
    temperatura: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'signosVitales',
  });
  return signosVitales;
};