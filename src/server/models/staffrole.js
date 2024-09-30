'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StaffRoles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      StaffRoles.belongsToMany(models.Staffs, {
        as: "staff",
        foreignKey: "staff_role_id",
        through: "StaffAssignedRoles"
      });
    }
  };
  StaffRoles.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.ENUM('active', 'inactive')
  }, {
    sequelize,
    schema: 'public'
  });
  return StaffRoles;
};