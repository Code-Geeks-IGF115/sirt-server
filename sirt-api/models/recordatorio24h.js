'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recordatorio24H extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Consulta,{as:'Consulta'});
    }
  }
  Recordatorio24H.init({
    desayuno: DataTypes.STRING,
    horaDesayuno: DataTypes.TIME,
    almuerzo: DataTypes.STRING,
    horaAlmuerzo: DataTypes.TIME,
    cena: DataTypes.STRING,
    horaCena: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Recordatorio24H',
  });
  return Recordatorio24H;
};