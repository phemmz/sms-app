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
  }, {});

  Contact.removeAttribute('id');

  Contact.associate = models => {
    Contact.hasMany(models.Message, {
      foreignKey: 'senderId',
      as: 'sentMessages',
    });
    Contact.hasMany(models.Message, {
      foreignKey: 'receiverId',
      as: 'receivedMessages',
    });
  };

  return Contact;
};
