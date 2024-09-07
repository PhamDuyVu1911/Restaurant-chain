"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TableModel extends Model {
    static associate(models) {
      TableModel.hasMany(models.TableDetailModel, {
        foreignKey: 'tableId',
        as: 'tableDetails'
      });

      TableModel.hasMany(models.OrderModel, {
        foreignKey: 'tableNumber',
        sourceKey: 'tableNumber',
        as: 'orders'
      });

      TableModel.belongsTo(models.StoreModel, {
        foreignKey: 'storeId',
        as: 'store'
      });
    }
  }
  TableModel.init(
    {
      tableNumber: DataTypes.STRING,
      tableStatus: DataTypes.STRING,
      type: DataTypes.INTEGER,
      maximumNumberOfPeople: DataTypes.INTEGER,
      numberPeople: DataTypes.INTEGER,
      storeId: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "TableModel",
      tableName: "tables",
    }
  );
  return TableModel;
};
