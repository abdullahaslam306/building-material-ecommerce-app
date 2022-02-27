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
      unique: true,
    },
    'user_role': {
      type: sequelizeDataTypes.STRING,
      allowNull: false,
    },
    'password': {
      type: sequelizeDataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: true,
  });
 
  return users;
};
