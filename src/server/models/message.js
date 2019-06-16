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
      values: ['compose', 'sent'],
      defaultValue: 'compose',
      allowNull: false,
    },
    senderId: {
      type: DataTypes.STRING,
    },
    receiverId: {
      type: DataTypes.STRING,
    },
  }, {});

  Message.associate = models => {
    Message.belongsTo(models.Contact, {
      foreignKey: 'senderId',
      onDelete: 'CASCADE',
    });
    Message.belongsTo(models.Contact, {
      foreignKey: 'receiverId',
      onDelete: 'CASCADE',
    });
  };

  return Message;
};
