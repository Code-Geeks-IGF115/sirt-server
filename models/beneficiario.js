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
      this.hasMany(models.SignosVitales,{as: 'signosVitales'});
      this.belongsTo(models.Responsable,{as: 'responsable'});
      this.hasMany(models.Consulta,{as: 'consultas'});
      this.hasOne(models.DatosMedicos,{as:'datosMedicos'});
      this.hasMany(models.CitaMedica,{as:'citasMedicas'});
      this.hasMany(models.ExamenLaboratorio,{as:'examenesLaboratorio'});
    }
  }
  Beneficiario.init({
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATE,
    sexo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Beneficiario',
  });
  return Beneficiario;
};