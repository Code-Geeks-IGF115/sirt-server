'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HistoriaDietetica', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      actividadFisica: {
        type: Sequelize.STRING
      },
      consumoAlcohol: {
        type: Sequelize.STRING
      },
      consumoTabaco: {
        type: Sequelize.STRING
      },
      preferenciaAlimenticia: {
        type: Sequelize.STRING
      },
      alimentosNoPreferidos: {
        type: Sequelize.STRING
      },
      alergias: {
        type: Sequelize.STRING
      },
      lugarDeComida: {
        type: Sequelize.STRING
      },
      quienPreparaAlimentos: {
        type: Sequelize.STRING
      },
      horasDeSueno: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('HistoriaDietetica');
  }
};