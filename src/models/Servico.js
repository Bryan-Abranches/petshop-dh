const db = require("../database/db.json");

const Servico = {
  findAll: () => {
    const servico = [];
    
    db.services.map((service) => {
      servico.push({
        id: service.id,
        nome: service.name,
        preco: `R$ ${service.price.toLocaleString('pt-BR', {currency: 'BRL',
        minimumFractionDigits: 2})}`, //Deve estar formatado no padrão brasileiro, para isso pode utilizar o método: toLocaleString(),
        descricao: service.description,
        imagem: service.image,
      });
    });

    return servico;
  },
};

module.exports = Servico;
