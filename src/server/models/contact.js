export default (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Contact name can not be empty',
        },
      },
    },
    phoneNumber: {
      type: DataTypes.STRING,
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
  }, {});

  Contact.associate = models => {
    Contact.hasMany(models.Message, {
      foreignKey: 'receiverId',
      as: 'receiver',
    });
    Contact.hasMany(models.Message, {
      foreignKey: 'senderId',
      as: 'sender',
    });
  };

  return Contact;
};
