"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("consultas3", {
      nome: {
        type: Sequelize.TEXT,
      },
      email: {
        type: Sequelize.TEXT,
      },
      cpf: {
        type: Sequelize.TEXT,
      },
      nomeDoPet: {
        type: Sequelize.TEXT,
      },
      tipoDoPet: {
        type: Sequelize.TEXT,
      },
      hora: {
        type: Sequelize.TEXT,
      },
      dia: {
        type: Sequelize.TEXT,
      },
      mes: {
        type: Sequelize.TEXT,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("consultas3");
  },
};
