const errorHandler = require('../helpers/errorHandler');
const response  = require('../helpers/response');
const { models } = require('../server/config');

/**
 * Middleware to restrict routes to designated user roles
 * @param {String} userRole - the role(s) the route should be restricted to
 */
const restrictRoute = (...userRole) => {
  return async (req, res, next) => {
    try {
      if (!userRole.includes(req?.user?.userType)) return response(res, false, 401, 'Unauthorized');

      const model = req.user.userType === 'customer' ? models.Customers : models.Staffs;

      // Find the valid user based on user ID
      const valid_user = await model.findOne({ where: { id: Number(req.user.id) } });
      const status = valid_user?.status || valid_user?.user_status;

      if (status !== 'active') return response(res, false, 403, 'Account not valid');

      next();
    } catch (error) {
      errorHandler(error);
      return response(res, false, 500, 'There was an error while processing this request');
    }
  };
};

module.exports = restrictRoute;
