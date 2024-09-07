"use strict";
const { Model } = require("sequelize");
import bcrypt from "bcrypt";
module.exports = (sequelize, DataTypes) => {
  class UserModel extends Model {
    static associate(models) {
      // define association here

      UserModel.hasMany(models.OrderModel, {
        foreignKey: 'userId',
        as: 'orders'
      });

      UserModel.hasMany(models.BelongStoreModel, {
        foreignKey: 'staffId',
        as: 'belongStores'
      });

      UserModel.belongsTo(models.RoleModel, {
        foreignKey: 'roleId',
        as: 'role'
      });

      UserModel.belongsTo(models.PointMemberModel, {
        foreignKey: 'pointMemberId',
        as: 'pointMember'
      });
    }

    // Check password
    async isCorrectPassword(password) {
      return await bcrypt.compare(password, this.password);
    }
  }
  UserModel.init(
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      gender: DataTypes.BOOLEAN,
      dob: DataTypes.DATE,
      password: DataTypes.STRING,
      pointMemberId: DataTypes.INTEGER,
      roleId: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "UserModel",
      tableName: "users",
      hooks: {
        // Run when create new user
        beforeCreate: async (user) => {
          if (user.password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
          }
        },

        // Run when create update user password
        beforeUpdate: async (user) => {
          if (user.changed("password")) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
          }
        },
      },
    }
  );

  return UserModel;
};
