const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Staffs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Staffs.belongsToMany(models.StaffRoles, {
        as: "staff_roles",
        foreignKey: "staff_id",
        through: "StaffAssignedRoles"
      });

      Staffs.hasMany(models.StaffAssignedRoles, {
        as: "Roles",
        foreignKey: 'staff_id'
      });

    }
  };
  Staffs.init({
    user_id: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    picture: DataTypes.STRING,
    dob: DataTypes.STRING,
    gender: DataTypes.ENUM('male', 'female'),
    address: DataTypes.TEXT,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    designation: DataTypes.ENUM('ceo'),
    role: DataTypes.ENUM('super admin', 'admin', 'sales', 'risk'),
    status: DataTypes.ENUM('inactive','active','blocked','deleted'),
    transaction_pin: DataTypes.STRING,
    customer_id: DataTypes.INTEGER,
    reference: DataTypes.STRING,
    employee_id: DataTypes.STRING,
    cost_center: DataTypes.STRING,
    firebase_device_key: DataTypes.STRING,
  }, {
    sequelize,
    schema: 'public'
  });

  return Staffs;
};