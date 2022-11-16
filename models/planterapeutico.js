'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlanTerapeutico extends Model {
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
  PlanTerapeutico.init({
    motivoDeLaConsulta: DataTypes.STRING,
    examenMental: DataTypes.STRING,
    diagnostico: DataTypes.STRING,
    planDeTratamiento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PlanTerapeutico',
  });
  return PlanTerapeutico;
};