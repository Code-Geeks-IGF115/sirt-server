'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Consulta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Beneficiario,{as:'beneficiario'});
      this.belongsTo(models.Ficha,{as:'ficha'});
      this.belongsTo(models.Usuario,{as:'doctor'});
      this.hasMany(models.SeguimientoConsulta,{as:'seguimientosConsulta'});
    }
  }
  Consulta.init({
  }, {
    sequelize,
    modelName: 'Consulta',
  });
  return Consulta;
};