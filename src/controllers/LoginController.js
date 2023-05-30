const db = require("../database/db.json");

const LoginController = {
  showLogin: (req, res) => {
    res.render("login");
  },

  login: (req, res) => {
    const users = db.users;
    console.log(users);

    const { email, password } = req.body;

    //console.log(req.body); dados enviados na requisição

    const userFound = users.find((user) => user.email === email);

    //console.log(userFound); // Usuario encontrado

    if (!userFound) {
      return console.log("Usuario nao encontrado");
    }

    const isValidPassword = userFound.password === password;

    //console.log(isValidPassword) retorno da senha valida

    if (!isValidPassword) {
      // validação da senha
      console.log("Email ou senha invalido");
      return;
    }

    if (!userFound.isAdmin) {
      return res.redirect("/");
    }

    return res.redirect("/admin/home");
  },
};

module.exports = LoginController;
