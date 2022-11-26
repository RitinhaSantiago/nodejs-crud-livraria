//importação das depêndencias do projeto 
const express = require('express')
const routes = require('./routes')

//definição da porta de acesso ao servidor
const port = 3000

//instanciar o objeto do servidor
const servidor = express()

routes(servidor)

//configuração de recebimento de requisições do servidor (ouvir)
servidor.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

module.exports=servidor