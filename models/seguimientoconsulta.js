'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SeguimientoConsulta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ExamenLaboratorio,{as:'examenesLaboratorio'});
      this.belongsTo(models.Consulta,{as:'consulta'});
      this.belongsTo(models.Usuario,{as:'doctor'});
    }
  }
  SeguimientoConsulta.init({
    fecha: DataTypes.DATE,
    descripcion: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'SeguimientoConsulta',
  });
  return SeguimientoConsulta;
};