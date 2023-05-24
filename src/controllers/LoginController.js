const db = require("../database/db.json");

const LoginController = {
  showLogin: (req, res) => {
    res.render("login");
  },

  login: (req, res) => {
    const users = db.users;
    console.log(users);

    const { email, password } = req.body;
    console.log(req.body);

    const userFound = users.find((user) => {
      user.email === email;
    });

    console.log(userFound); // Continuar aular 28min

    if (!userFound) {
      return console.log("Usuario nao encontrado");
    }

    console.log(req.body);
  },
};



module.exports = LoginController;
