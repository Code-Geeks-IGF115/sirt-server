'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Recordatorio24Hs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      desayuno: {
        type: Sequelize.STRING
      },
      horaDesayuno: {
        type: Sequelize.TIME
      },
      almuerzo: {
        type: Sequelize.STRING
      },
      horaAlmuerzo: {
        type: Sequelize.TIME
      },
      cena: {
        type: Sequelize.STRING
      },
      horaCena: {
        type: Sequelize.TIME
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
    await queryInterface.dropTable('Recordatorio24Hs');
  }
};