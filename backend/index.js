const express = require('express')

const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const MOCK_RESPONSE = {
    greeting: 'hello'
}

// endpoints de la API
app.get('/', (req, res)=> {
    res.send(MOCK_RESPONSE)
})

// Crear servidor y escuchar en el puerto 5000
const server = app.listen(3100, ()=> {
    console.log('API escuchando en puerto 3100');
})
