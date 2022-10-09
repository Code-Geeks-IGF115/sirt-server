'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permiso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Usuario,{through:'PermisosUsuario'});
    }
  }
  Permiso.init({
    codigo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    selfGranted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Permiso',
  });
  return Permiso;
};