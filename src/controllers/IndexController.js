const IndexController = {
  showIndex: (req, res) => {
    res.render("index");
  },
  showContato: (req, res) => {
    res.render('contato');
  },
  showServicos: (req, res) => {
    res.render('servicos');
  },
  showSobre: (req, res) => {
    res.render('sobre');
  }, 
};

module.exports = IndexController;
