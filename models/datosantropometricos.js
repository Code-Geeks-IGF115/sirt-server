'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DatosAntropometricos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Consulta,{as:'consulta'});
    }
  }
  DatosAntropometricos.init({
    pesoActual: DataTypes.FLOAT,
    pesoMeta: DataTypes.FLOAT,
    pesoIdeal: DataTypes.FLOAT,
    grasaViceral: DataTypes.FLOAT,
    grasaMuscular: DataTypes.FLOAT,
    cCintura: DataTypes.FLOAT,
    cMuneca: DataTypes.FLOAT,
    cBrazoRelajado: DataTypes.FLOAT,
    cBrazoContraido: DataTypes.FLOAT,
    altura: DataTypes.FLOAT,
    indiceMasaCorporal: DataTypes.FLOAT,
    diagnostico: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'DatosAntropometricos',
  });
  return DatosAntropometricos;
};