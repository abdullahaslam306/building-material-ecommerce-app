const { Sequelize } = require('sequelize');

module.exports = (sequelize, sequelizeDataTypes) => {
  const products = sequelize.define('product', {
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
      type: sequelizeDataTypes.TEXT,
      allowNull: false,
    },
    'image': {
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
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
  }, {
    timestamps: true,
  });

  products.associate = (models) => {
    products.belongsTo(models.categories, { as: 'categoryData', foreignKey: 'category' });
  };

  return products;
};
