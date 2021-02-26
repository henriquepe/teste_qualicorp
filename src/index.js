const express = require('express')
require('./shared/infra/mongoose')

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {

    console.log(`server iniciado na porta ${PORT}`)
})


// Teste FullStack: Criar um CRUD de clientes. 

// Cliente: Pode ser básico, CPF, Nome, Email, Telefone, etc

// Backend:  Criar a API utilizando NODE.js.

// FRONTEND: Aqui na Qualicorp utilizamos VUE.Js, mas pode ficar à vontade para escolher qual utilizar.

// BACKEND: Publicar Heroku

// Frontend: Publicar Netlify
