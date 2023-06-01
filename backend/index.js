const express = require('express')

const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const MOCK_RESPONSE = {
    greeting: 'hello'
}

// endpoints de la API
app.get('/', (req, res) => {
    res.send(MOCK_RESPONSE)
})

// Creamos la sesión del carrito
app.post('/create-cart', (req, res) => {
    const productId = req.body.id || 'price_1NE2YbBY5TFU3YfIZkZ5FomG'
    const quantity = req.body.qty
    createSesion(res, productId, quantity)
})

const createSesion = async (res, productId, quantity) => {
    const stripe = require('stripe')('sk_test_51LuIgEBY5TFU3YfIaI9lsQiXH3fF2hD4q3kZcgjUe3EkQPvdrYyB7ErwosqzPxnUoHqJPGZWH9xlbkaZQ95IVyDd00XWxYnT68');

    const session = await stripe.checkout.sessions.create({
        success_url: 'https://example.com/success',
        line_items: [
            { price: productId, quantity },
        ],
        mode: 'payment',
    });
    console.log('product', session);

    res.send(session)
}

// Crear servidor y escuchar en el puerto 5000
const server = app.listen(3100, () => {
    console.log('API escuchando en puerto 3100');
})
