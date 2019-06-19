'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Contacts', {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Contact name can not be empty',
          },
        },
      },
      phoneNumber: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        unique: {
          args: true,
          msg: 'This phone number already exist'
        },
        validate: {
          notEmpty: {
            args: true,
            msg: 'Phone number can not be empty',
          },
        },
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Contacts');
  }
};