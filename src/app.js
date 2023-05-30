/* Importações */
const express = require("express");
const path = require('path')
const methodOverride = require('method-override')

/* Importações de Rotas */
const IndexRouter = require("./routers/indexRouter");
const cadastroRouter = require('./routers/cadastroRouter')
const loginRouter = require('./routers/loginRouter')
const adminRouter = require('./routers/adminRouter')

/* Variaveis */
const app = express();
const port = 5454;

app.set("view engine", "ejs"); //Configurar o servidor para trabalhar com o template engine ejs

app.set("views", path.resolve("src", "views")); //Informar ao servidor aonde está a nossa pasta de views

app.use(express.urlencoded({extended: false})) // middleware utilizado para tratamento do req.body

app.use(methodOverride('_method')) // Serve para sobrescrever o method padrao das requisições do navegador (GET)

app.use(express.json()); //Configurar o servidor para que todas as reqisições seja em JSON

app.use(express.static(path.resolve("src", "public"))); //Informar ao servidor a pasta de arquivos estáticos (public)

/* Rotas */
app.use("/", IndexRouter);
app.use('/cadastro', cadastroRouter)
app.use('/login', loginRouter)
app.use('/admin', adminRouter)


/* Servidor */

app.listen(port, () => {
  console.log(`O servidor esta rodando na porta ${port}`);
});
