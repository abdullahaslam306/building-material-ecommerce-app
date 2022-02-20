const { Sequelize } = require('sequelize');

module.exports = (sequelize, sequelizeDataTypes) => {
  const event = sequelize.define('event', {
    'id': {
      type: sequelizeDataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    'title': {
      type: sequelizeDataTypes.STRING,
      allowNull: false,
    },
    'cover': {
      type: sequelizeDataTypes.STRING,
      allowNull: false,
    },
    'desc': {
      type: sequelizeDataTypes.STRING,
      allowNull: false,
    },
    'date': {
      type: sequelizeDataTypes.DATE,
      allowNull: false,
    },
  }, {
    timestamps: true,
  });

  return event;
};
