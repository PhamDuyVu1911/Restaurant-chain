"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderModel extends Model {
    static associate(models) {
      OrderModel.belongsTo(models.VoucherModel, {
        foreignKey: 'voucherId',
        as: 'voucher'
      });

      OrderModel.hasMany(models.TableDetailModel, {
        foreignKey: 'orderId',
        as: 'tableDetails'
      });


      OrderModel.belongsTo(models.StoreModel, {
        foreignKey: 'storeId',
        as: 'store'
      });

      OrderModel.belongsTo(models.UserModel, {
        foreignKey: 'userId',
        as: 'user'
      });
    }
  }
  OrderModel.init(
    {
      phoneNumber: DataTypes.STRING,
      totalPrice: DataTypes.DECIMAL(18, 0),
      statusPay: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      tableNumber: DataTypes.STRING,
      paymentBy: DataTypes.INTEGER,
      voucherId: DataTypes.INTEGER,
      storeId: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
      userId: DataTypes.INTEGER, // Thêm trường userId
    },
    {
      sequelize,
      modelName: "OrderModel",
      tableName: "orders",
    }
  );
  return OrderModel;
};
