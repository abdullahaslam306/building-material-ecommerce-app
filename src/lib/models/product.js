const { Sequelize } = require('sequelize');

module.exports = (sequelize, sequelizeDataTypes) => {
  const product = sequelize.define('product', {
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
    'desc': {
      type: sequelizeDataTypes.TEXT,
      allowNull: false,
    },
    'link': {
      type: sequelizeDataTypes.STRING,
      allowNull: false,
    },
    'properties': {
      type: sequelizeDataTypes.TEXT,
      allowNull: false,
    },
    'category': {
      type: sequelizeDataTypes.INTEGER,
      allowNull: true,
      'default': null,
      references: {
        model: 'categories',
        key: 'id',
        deferable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
  }, {
    timestamps: true,
  });

  return product;
};
