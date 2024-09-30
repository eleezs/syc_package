const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Customers.hasOne(models.Staffs, {
        foreignKey: "customer_id",
      });
      
      Customers.hasMany(models.TargetContributionLogs, {
        foreignKey: 'customer_id',
      });

    }
  }
  Customers.init(
    {
      user_id: DataTypes.STRING,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      alternative_number: DataTypes.STRING,
      picture: DataTypes.STRING,
      dob: DataTypes.STRING,
      gender: DataTypes.ENUM("male", "female"),
      address: DataTypes.TEXT,
      lga: DataTypes.STRING,
      state: DataTypes.STRING,
      tag: DataTypes.STRING,
      country: DataTypes.STRING,
      nature_of_accomodation: DataTypes.ENUM("owned", "rented"),
      years_at_residence: DataTypes.INTEGER,
      marital_status: DataTypes.ENUM(
        "married",
        "single",
        "divorced",
        "widowed"
      ),
      bvn: DataTypes.INTEGER,
      nin: DataTypes.INTEGER,
      user_type: DataTypes.ENUM("individual", "business"),
      registration_type: DataTypes.ENUM("self", "group"),
      preferred_monthly_repayment_date: DataTypes.INTEGER,
      preferred_weekly_repayment_date: DataTypes.STRING,
      preferred_daily_repayment_time: DataTypes.DATE,
      creditiumId: DataTypes.STRING,
      group_id: DataTypes.STRING,
      user_status: DataTypes.ENUM(
        "active",
        "suspended",
        "deactivated",
        "blocked"
      ),
      email_verified: DataTypes.BOOLEAN,
      phone_verified: DataTypes.BOOLEAN,
      transaction_pin: DataTypes.STRING,
      firebase_device_key: DataTypes.STRING,
      signup_platform: DataTypes.STRING,
      reference: DataTypes.STRING,
      tier: {
        type: DataTypes.STRING,
        defaultValue: 'tier_zero'
      },
      signature: DataTypes.STRING
    },
    {
      sequelize,
      schema: 'public'
    }
  );

  return Customers;
};
