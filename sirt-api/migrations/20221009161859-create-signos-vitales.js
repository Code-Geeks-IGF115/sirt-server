'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SignosVitales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      altura: {
        type: Sequelize.DECIMAL
      },
      presion: {
        type: Sequelize.STRING
      },
      saturacionOxigeno: {
        type: Sequelize.DECIMAL
      },
      peso: {
        type: Sequelize.DECIMAL
      },
      temperatura: {
        type: Sequelize.DECIMAL
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
    await queryInterface.dropTable('SignosVitales');
  }
};