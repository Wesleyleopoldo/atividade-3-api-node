const express = require("express")
const app = express()
const PORT = 3000

app.use(express.static("public"))

app.use((request, response, next) => { // Essa peste aqui ela intercepta todas as requisições...
    console.log(`${request.method} ${request.url}`)
    next();
})

app.get("/contato", (request, response) => {
    response.send("<h1>Página de Contato</h1>")
})

app.get("/produto/:id", (request, response) => {
    const userId = request.params.id
    response.send(`<h1>${userId}</h1>`)
})

app.listen(PORT, () => console.log("Bem-vindo ao meu servidor Express.js"));