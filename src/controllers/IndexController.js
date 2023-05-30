const Servico = require("../models/Servico");

const IndexController = {
  showIndex: (req, res) => {
    const servicos = Servico.findAll();

    res.render("index", { servicos });
  },
  showContato: (req, res) => {
    res.render("contato");
  },
  showServicos: (req, res) => {
    const servicos = Servico.findAll();

    res.render("servicos", { servicos });
  },
  showSobre: (req, res) => {
    res.render("sobre");
  },
};

module.exports = IndexController;
