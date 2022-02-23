const { Sequelize } = require('sequelize');

module.exports = (sequelize, sequelizeDataTypes) => {
  const users = sequelize.define('users', {
    'id': {
      type: sequelizeDataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    'name': {
      type: sequelizeDataTypes.STRING,
      allowNull: false,
    },
    'email': {
      type: sequelizeDataTypes.STRING,
      allowNull: false,
    },
    'user_role_id': {
      type: sequelizeDataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_roles',
        key: 'id',
        deferable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    'password': {
      type: sequelizeDataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: true,
  });
  users.associate = (models) =>{
    users.belongsTo(models.user_roles, { foreignkey: 'user_role_id'})
  }
  return users;
};
