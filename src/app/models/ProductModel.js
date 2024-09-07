"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductModel extends Model {
    static associate(models) {
      ProductModel.belongsTo(models.CategoryModel, {
        foreignKey: 'categoryId',
        as: 'category'
      });

      ProductModel.belongsTo(models.TypeOfFoodModel, {
        foreignKey: 'typeOfFoodId',
        as: 'typeOfFood'
      });
      
      ProductModel.hasMany(models.TableDetailModel, {
        foreignKey: 'productId',
        as: 'tableDetails'
      });
    }
  }
  ProductModel.init(
    {
      title: DataTypes.STRING,
      price: DataTypes.DECIMAL(18, 0),
      image: DataTypes.TEXT,
      categoryId: DataTypes.INTEGER,
      typeOfFoodId: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "ProductModel",
      tableName: "products",
    }
  );
  return ProductModel;
};
