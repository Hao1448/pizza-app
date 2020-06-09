require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const Pizza = require('./model/Pizza');
const Order = require('./model/Order');

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())

  server.get('/api/pizza', async (req, res) => {
    const pizza = await Pizza.list();
    res.json(pizza);
  })

  server.get('/api/orders', async(req, res) => {
    const orders = await Order.list();
    res.json(orders);
  })

  server.get('/api/order/:id', async(req,res) => {
    const order = await Order.getById(req.params.id);
    res.json(JSON.parse(order.data));
  })

  server.post('/api/order', async (req, res) => {
    const { address, pizzas } = req.body;
    const order = await Order.createOrder({
      data: JSON.stringify({
        address,
        pizzas
      })
    });

    res.json({
      data: {
        id: order.id
      },
      success: true
    });
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})