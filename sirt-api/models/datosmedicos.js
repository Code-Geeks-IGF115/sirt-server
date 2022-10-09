'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DatosMedicos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DatosMedicos.init({
    antecedentesFamiliares: DataTypes.TEXT,
    antecedentesMedicos: DataTypes.TEXT,
    medicamentosPrescritos: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'DatosMedicos',
  });
  return DatosMedicos;
};