const fs = require('fs');
const path = require('path');

const models = {};

// Dynamically initialize models
const initializeModels = (sequelize) => {
  const modelsDir = path.join(__dirname, 'models');

  // Read all files in the models directory
  fs.readdirSync(modelsDir)
    .filter((file) => {
      return file.indexOf('.') !== 0 && file.slice(-3) === '.js';
    })
    .forEach((file) => {
      const model = require(path.join(modelsDir, file))(sequelize, sequelize.Sequelize.DataTypes);
      models[model.name] = model;
    });

  // Call associate method on models to define associations
  Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
      // models[modelName].associate(models);
    }
  });

  return models;
};

// Sync models with the existing database schema
const syncModels = async (sequelize) => {
  try {
    await sequelize.sync({ alter: false });
    console.log('Models synchronized with the database.');
  } catch (err) {
    console.error('Error syncing models:', err);
    throw err;
  }
};

module.exports = {
  initializeModels,
  syncModels,
  models,
};
