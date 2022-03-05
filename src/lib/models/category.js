const { Sequelize } = require('sequelize');

module.exports = (sequelize, sequelizeDataTypes) => {
  const categories = sequelize.define('categories', {
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
        model: 'categories',
        key: 'id',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
  }, {
    timestamps: true,
  });

  categories.associate = (models) => {
    categories.belongsTo(models.categories, { as: 'parentData', foreignKey: 'parent' });
    categories.hasMany(models.categories, { as: 'children', foreignKey: 'parent' });
  };
  return categories;
};
