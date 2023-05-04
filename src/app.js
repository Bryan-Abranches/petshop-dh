const express = require('express')


const IndexRouter = require('./routers/indexRouter')

const app = express()
const port = 5454

app.use('/', IndexRouter)





app.listen(port, ()=>{
    console.log(`O servidor esta rodando na porta ${port}`)
})
