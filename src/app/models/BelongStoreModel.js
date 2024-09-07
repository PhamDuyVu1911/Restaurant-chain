"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BelongStoreModel extends Model {
    static associate(models) {
      BelongStoreModel.belongsTo(models.UserModel, {
        foreignKey: 'staffId',
        as: 'staff'
      });

      BelongStoreModel.belongsTo(models.StoreModel, {
        foreignKey: 'storeId',
        as: 'store'
      });
    }
  }
  BelongStoreModel.init(
    {
      staffId: DataTypes.INTEGER,
      storeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "BelongStoreModel",
      tableName: "belongStores",
    }
  );
  return BelongStoreModel;
};
