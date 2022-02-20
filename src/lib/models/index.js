const pg = require('pg');
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = require('../../configs/env');

// change the vaues here
const {
  DB_PORT: port,
  DB_HOSTNAME: host,
  DB_USERNAME: username,
  DB_PASSWORD: password,
  DB_NAME: databaseName,
} = env;

async function openConnection() {
  const connection = {};
  const sequelize = new Sequelize(databaseName, username, password, {
    port,
    host,
    dialect: 'postgres',
    dialectModule: pg,
    pool: {
      min: 0,
      max: 3,
      idle: 1000,
      acquire: 1000,
    },
    define: {
      underscored: true,
      timestamps: false,
      paranoid: false,
    },
  });

  fs.readdirSync(__dirname)
    .filter((file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
    .forEach((file) => {
      // eslint-disable-next-line
      const model = require(path.join(__dirname, file))(
        sequelize,
        Sequelize.DataTypes,
      );
      connection[model.name] = model;
    });

  Object.keys(connection).forEach((modelName) => {
    if (connection[modelName].associate) {
      connection[modelName].associate(connection);
    }
  });
  await sequelize.sync();
  connection.sequelize = sequelize;
  connection.Sequelize = Sequelize;

  return connection;
}

function closeConnection(connection) {
  return connection.sequelize.close();
}

module.exports = { openConnection, closeConnection };
