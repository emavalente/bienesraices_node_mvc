import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import db from "../config/db.js";

// Definir un nuevo modelo
const Usuario = db.define(
  "usuarios",
  {
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
  },
  {
    hooks: {
      beforeCreate: async (usuario) => {
        const salt = await bcrypt.genSalt(10);
        usuario.password = await bcrypt.hash(usuario.password, salt);
      },
    },
  }
);

export default Usuario;
