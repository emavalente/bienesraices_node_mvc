import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import db from "./config/db.js";

// Instanciar express
const app = express();

// Conexión a la base de datos.
try {
  await db.authenticate();
  console.log("Conexión Correcta a Base de datos");
} catch (error) {
  console.log(error);
}

// Declaración de puerto a utilizar.
const PORT = 3000;

// Configuración de habilitación para PUG.
app.set("view engine", "pug");

// Configurar carpeta pública para archivos estáticos.
app.use(express.static("public"));

// Configuración de rutas principales hacia los modulos de rutas
app.use("/auth", usuarioRoutes);

// Inicializar Servidor
app.listen(PORT, () => {
  console.log(`Servidor inicializado en puerto: ${3000}`);
});
