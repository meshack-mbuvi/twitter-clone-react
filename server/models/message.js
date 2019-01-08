'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define (
    'Message',
    {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      read: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {}
  );

  Message.associate = function (models) {
    Message.belongsTo (models.User, {
      foreignKey: 'user_id',
      as: 'from',
    });

    Message.belongsTo (models.User, {
      foreignKey: 'to',
      as: 'receiver',
    });
  };

  return Message;
};
