const express = require('express')
const path = require('path')
const app = express()
const port = 3010
const home = require("./router/home")

app.use("/home",home)

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/', function (req, res) {
    res.send('Got a POST request')
  })
app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
})
app.use('/static', express.static(path.join(__dirname, 'public')))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))