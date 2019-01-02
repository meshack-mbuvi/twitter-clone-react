'use strict';
module.exports = (sequelize, DataTypes) => {
  const Twit = sequelize.define (
    'Twit',
    {
      text: DataTypes.STRING,
      bio: DataTypes.STRING,
    },
    {}
  );

  Twit.associate = function (models) {
    Twit.belongsToMany (models.Twit, {
      as: 'replies',
      through: 'Reply',
      onDelete: 'CASCADE',
    });

    Twit.belongsTo (models.User, {
      foreignKey: 'user_id',
      as: 'author',
    });
  };
  return Twit;
};
