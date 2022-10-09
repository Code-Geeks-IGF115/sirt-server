'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DatosAntropometricos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pesoActual: {
        type: Sequelize.DECIMAL
      },
      pesoMeta: {
        type: Sequelize.DECIMAL
      },
      pesoIdeal: {
        type: Sequelize.DECIMAL
      },
      grasaViceral: {
        type: Sequelize.DECIMAL
      },
      grasaMuscular: {
        type: Sequelize.DECIMAL
      },
      cCintura: {
        type: Sequelize.DECIMAL
      },
      cMuneca: {
        type: Sequelize.DECIMAL
      },
      cBrazoRelajado: {
        type: Sequelize.DECIMAL
      },
      cBrazoContraido: {
        type: Sequelize.DECIMAL
      },
      altura: {
        type: Sequelize.DECIMAL
      },
      indiceMasaCorporal: {
        type: Sequelize.DECIMAL
      },
      diagnostico: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('DatosAntropometricos');
  }
};