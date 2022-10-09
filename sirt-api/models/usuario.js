'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Permiso,{through:'PermisosUsuario'});
      this.hasMany(models.Consulta,{as:'Consulta'});
      this.hasMany(models.SeguimientoConsulta,{as:'SeguimientosConsulta'});
    }
  }
  Usuario.init({
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    email: DataTypes.STRING,
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};