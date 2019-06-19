'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      message: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Message can not be empty',
          },
        },
      },
      status: {
        type: Sequelize.ENUM('sent', 'read'),
        defaultValue: 'sent',
        allowNull: false,
      },
      senderId: {
        type: Sequelize.STRING,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'Contacts',
          key: 'phoneNumber',
          as: 'senderId',
        },
      },
      receiverId: {
        type: Sequelize.STRING,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        references: {
          model: 'Contacts',
          key: 'phoneNumber',
          as: 'receiverId',
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
    return queryInterface.dropTable('Messages');
  }
};