const { Sequelize } = require('sequelize');

module.exports = (sequelize, sequelizeDataTypes) => {
  const userRoles = sequelize.define('user_roles', {
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
    'create_privilidge': {
      type: sequelizeDataTypes.BOOLEAN,
      allowNull: false,
    },
    'update_privilidge': {
      type: sequelizeDataTypes.BOOLEAN,
      allowNull: false,
    },
    'access_privilidge': {
      type: sequelizeDataTypes.BOOLEAN,
      allowNull: false,
    },
    'delete_privilidge': {
      type: sequelizeDataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    timestamps: true,
  });
  
  return userRoles;
};
