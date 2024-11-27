app.put('/products/:id', api.editProduct)
app.delete('/products/:id', api.deleteProduct)
app.post('/products', api.createProduct)

app.get('/orders', api.listOrders)
app.get('/orders/', api.createOrder)

app.use(express.json())
app.put('/orders/:id', api.editOrder)
app.delete('/orders/:id', api.deleteOrder)

module.exports = app


// Boot the server
app.listen(port, () => console.log(`Server listening on port ${port}`))