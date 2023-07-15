'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Posts, {
        sourceKey: 'userId', //Users 모델의 userId 컬럼을
        foreignKey: 'userId', //Posts 모델의 userId 컬럼과 연결
      });
      this.hasMany(models.Comments, {
        sourceKey: 'userId', // Users 모델의 userId 컬럼을
        foreignKey: 'userId', //Comments 모델의 userId 컬럼과 연결
      });
      this.hasMany(models.Likes, {
        sourceKey: 'userId', // Users 모델의 userId 컬럼을
        foreignKey: 'userId', //Likes 모델의 userId 컬럼과 연결
      });
    }
  }
  Users.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        required: true,
      },
      nickname: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        required: true,
      },
      password: DataTypes.STRING,
      createdAt: {
        allowNull: false, // NOT NULL
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false, // NOT NULL
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'Users',
    }
  );
  return Users;
};
