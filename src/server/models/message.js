export default (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    message: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Message can not be empty',
        },
      },
    },
    status: {
      type: DataTypes.ENUM,
      values: ['sent', 'read'],
      defaultValue: 'compose',
      allowNull: false,
    },
    senderId: {
      type: DataTypes.STRING,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'Contacts',
        key: 'phoneNumber',
        as: 'senderId',
      },
    },
    receiverId: {
      type: DataTypes.STRING,
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
      references: {
        model: 'Contacts',
        key: 'phoneNumber',
        as: 'receiverId',
      },
    },
  }, {});

  Message.associate = models => {
    Message.belongsTo(models.Contact, {
      foreignKey: 'senderId',
      as: 'sentMessages',
    });
    Message.belongsTo(models.Contact, {
      foreignKey: 'receiverId',
      as: 'receivedMessages',
    });
  };

  return Message;
};
