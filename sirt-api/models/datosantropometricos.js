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
    pesoActual: DataTypes.DECIMAL,
    pesoMeta: DataTypes.DECIMAL,
    pesoIdeal: DataTypes.DECIMAL,
    grasaViceral: DataTypes.DECIMAL,
    grasaMuscular: DataTypes.DECIMAL,
    cCintura: DataTypes.DECIMAL,
    cMuneca: DataTypes.DECIMAL,
    cBrazoRelajado: DataTypes.DECIMAL,
    cBrazoContraido: DataTypes.DECIMAL,
    altura: DataTypes.DECIMAL,
    indiceMasaCorporal: DataTypes.DECIMAL,
    diagnostico: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'DatosAntropometricos',
  });
  return DatosAntropometricos;
};