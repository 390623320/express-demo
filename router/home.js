var express = require('express')
var router = express.Router()
//getParams
router.get('/getParams/:id', (req, res) => res.send(req.params))
//getquery
router.get('/getQuery', (req, res) => {res.send(req.query)})
//getBody
router.post('/getBody', (req, res) => {
    res.send(req.body)
})
module.exports = router