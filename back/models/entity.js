import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Entity = sequelize.define("Entity", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
