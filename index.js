const errorHandler = require('./src/helpers/errorHandler');
const response = require('./src/helpers/response');
const restrictRoute = require('./src/middlewares/restrictRoutes');
const { initializeModels, syncModels } = require('./src/server/config');

// Export all the necessary utilities, models, and helpers for other services to use
module.exports = {
  initializeModels,
  syncModels,
  response,
  errorHandler,
  restrictRoute
};
