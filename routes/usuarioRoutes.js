import express from "express";
import {
  formularioForgetPassword,
  formularioLogin,
  formularioRegister,
  registerUser,
} from "../controllers/usuarioController.js";

// instancia del sistema de router de express
const router = express.Router();

// Configuracion de ejecución de controllers
router.get("/login", formularioLogin);

router.get("/register", formularioRegister);
router.post("/register", registerUser);

router.get("/forget-password", formularioForgetPassword);

export default router;
