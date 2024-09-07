"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StoreModel extends Model {
    static associate(models) {
      StoreModel.hasMany(models.OrderModel, {
        foreignKey: 'storeId',
        as: 'orders'
      });

      StoreModel.hasMany(models.TableModel, {
        foreignKey: 'storeId',
        as: 'tables'
      });

      StoreModel.hasMany(models.BelongStoreModel, {
        foreignKey: 'storeId',
        as: 'belongStores'
      });
    }
  }
  StoreModel.init(
    {
      storeName: DataTypes.STRING,
      address: DataTypes.TEXT,
      phoneNumber: DataTypes.STRING,
      managedBy: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "StoreModel",
      tableName: "stores",
    }
  );
  return StoreModel;
};
