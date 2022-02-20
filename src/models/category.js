const { Sequelize } = require('sequelize');

module.exports = (sequelize, sequelizeDataTypes) => {
  const category = sequelize.define('category', {
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
    'level': {
      type: sequelizeDataTypes.INTEGER,
      allowNull: false,
    },
    'parent': {
      type: sequelizeDataTypes.INTEGER,
      allowNull: true,
      'default': null,
      references: {
        models: 'category',
        key: 'id',
        deferable: Sequalize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
  }, {
    timestamps: true,
  });

  return category;
};
