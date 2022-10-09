'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HistoriaDietetica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HistoriaDietetica.init({
    actividadFisica: DataTypes.STRING,
    consumoAlcohol: DataTypes.STRING,
    consumoTabaco: DataTypes.STRING,
    preferenciaAlimenticia: DataTypes.STRING,
    alimentosNoPreferidos: DataTypes.STRING,
    alergias: DataTypes.STRING,
    lugarDeComida: DataTypes.STRING,
    quienPreparaAlimentos: DataTypes.STRING,
    horasDeSueno: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HistoriaDietetica',
  });
  return HistoriaDietetica;
};