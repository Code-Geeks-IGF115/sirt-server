'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Beneficiario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.SignosVitales,{as: 'SignosVitales'});
      this.belongsTo(models.Responsable,{as: 'Responsable'});
      this.hasMany(models.Consulta,{as: 'Consultas'});
      this.hasOne(models.DatosMedicos,{as:'DatosMedicos'});
      this.hasMany(models.CitaMedica,{as:'CitasMedicas'});
    }
  }
  Beneficiario.init({
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATE,
    direccion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Beneficiario',
  });
  return Beneficiario;
};