"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TableDetailModel extends Model {
    static associate(models) {
      TableDetailModel.belongsTo(models.TableModel, {
        foreignKey: 'tableId',
        as: 'table'
      });

      TableDetailModel.belongsTo(models.ProductModel, {
        foreignKey: 'productId',
        as: 'product'
      });
      
      TableDetailModel.belongsTo(models.OrderModel, {
        foreignKey: 'orderId',
        as: 'order'
      });
    }
  }
  TableDetailModel.init(
    {
      quantity: DataTypes.INTEGER,
      price: DataTypes.DECIMAL(18, 0),
      tableId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "TableDetailModel",
      tableName: "tableDetails",
    }
  );
  return TableDetailModel;
};
