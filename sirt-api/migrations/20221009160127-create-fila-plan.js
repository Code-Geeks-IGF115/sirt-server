'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FilaPlans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cantidadSubtotal: {
        type: Sequelize.DECIMAL
      },
      proteinasSubtotal: {
        type: Sequelize.DECIMAL
      },
      grasasSubtotal: {
        type: Sequelize.DECIMAL
      },
      carbohidratosSubtotal: {
        type: Sequelize.DECIMAL
      },
      caloriasSubtotal: {
        type: Sequelize.DECIMAL
      },
      dia: {
        type: Sequelize.STRING
      },
      tiempo: {
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
    await queryInterface.dropTable('FilaPlans');
  }
};