const express = require('express')
require('../mongoose')
const cors = require('cors');
const rootRouter = require('../http/routes/index')

const app = express()
app.use(cors())
app.use(express.json())
app.use(rootRouter)


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
