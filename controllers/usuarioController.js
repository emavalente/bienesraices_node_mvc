import { check, validationResult } from "express-validator";
import Usuario from "../models/Usuario.js";

const formularioLogin = (req, res) => {
  res.render("auth/login", {
    pagina: "Iniciar Sesión",
  });
};

const formularioRegister = (req, res) => {
  res.render("auth/register", {
    pagina: "Crear Cuenta",
  });
};

const registerUser = async (req, res) => {
  // Validación
  await check("nombre")
    .notEmpty()
    .withMessage("El Nombre es obligatorio")
    .run(req);

  await check("email")
    .notEmpty()
    .withMessage("El Email es obligatorio")
    .isEmail()
    .withMessage("Eso no parece un Email")
    .run(req);

  await check("password")
    .isLength({ min: 6 })
    .withMessage("El password debe contener al menos seis caracteres")
    .run(req);

  await check("repeat_password")
    .notEmpty()
    .withMessage("Debes repetir tu password")
    .equals(req.body.password)
    .withMessage("Los passwords no son iguales")
    .run(req);

  let resultado = validationResult(req);

  // return res.json(resultado.array()); Si quiero responder con el resultado.

  // Verificar que el resultado de errores este vacío.
  if (!resultado.isEmpty()) {
    return res.render("auth/register", {
      pagina: "Crear Cuenta",
      errores: resultado.array(),
      usuario: {
        nombre: req.body.nombre,
        email: req.body.email,
      },
    });
  }
  const usuario = await Usuario.create(req.body);
};

const formularioForgetPassword = (req, res) => {
  res.render("auth/forget-password", {
    pagina: "Recupera tu acceso a Bienes Raices",
  });
};

export {
  formularioLogin,
  formularioRegister,
  registerUser,
  formularioForgetPassword,
};
