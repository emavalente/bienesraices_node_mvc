import { DataTypes } from "sequelize";
import db from "../config/db.js";

// Definir un nuevo modelo
const Usuario = db.define("usuarios", {
  nombre: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  token: DataTypes.STRING,
  confirmed: DataTypes.BOOLEAN,
});

export default Usuario;
