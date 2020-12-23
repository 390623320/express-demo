const express = require('express')
const path = require('path')
const app = express()
const port = 3010
const router = require("./router/index")
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//路由管理
router(app);
//处理静态资源
app.use('/static', express.static(path.join(__dirname, 'static')))
// 端口监听
app.listen(port, () => console.log(`Example app listening on port ${port}!`))