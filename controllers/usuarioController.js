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

const registerUser = (req, res) => {
  console.log(req);
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
