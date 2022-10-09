'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HabitosConsumo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      leche: {
        type: Sequelize.STRING
      },
      vegetales: {
        type: Sequelize.STRING
      },
      panFrances: {
        type: Sequelize.STRING
      },
      comidaChatarra: {
        type: Sequelize.STRING
      },
      cafe: {
        type: Sequelize.STRING
      },
      carne: {
        type: Sequelize.STRING
      },
      yogurt: {
        type: Sequelize.STRING
      },
      fruta: {
        type: Sequelize.STRING
      },
      tortilla: {
        type: Sequelize.STRING
      },
      dulces: {
        type: Sequelize.STRING
      },
      pollo: {
        type: Sequelize.STRING
      },
      pescado: {
        type: Sequelize.STRING
      },
      otros: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('HabitosConsumo');
  }
};