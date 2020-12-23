var express = require('express')
var router = express.Router()
router.get('/test', (req, res) => res.send('Hello Home-test'))
router.post('/testPost', (req, res) => {
    console.log("res",req.query,req.params,req.body)
    res.send('Hello Home-test')
})
module.exports = router