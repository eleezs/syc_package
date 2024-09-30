'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StaffAssignedRoles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      StaffAssignedRoles.belongsTo(models.Staffs, {
        foreignKey: "staff_id",
        as: "Staff"
      });
      StaffAssignedRoles.belongsTo(models.StaffRoles, {
        foreignKey: "staff_role_id",
        as:"Role"
      });
    }
  };
  StaffAssignedRoles.init({
    staff_id: DataTypes.INTEGER,
    staff_role_id: DataTypes.INTEGER,
    access_expiry_date: DataTypes.DATE,
    status: DataTypes.ENUM("active","inactive")
  }, {
    sequelize,
    modelName: 'StaffAssignedRoles',
    schema: 'public'
  });
  return StaffAssignedRoles;
};