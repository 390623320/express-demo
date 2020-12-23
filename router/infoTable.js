var express = require('express')
const infoHandles = require("../controller/infoHandles")
var router = express.Router()
//查询个人用户信息
router.post('/queryPersonInfo', infoHandles.queryPersonInfo)
//查询所有用户信息
router.get('/queryAllPersonInfo', infoHandles.queryAllPersonInfo)
//新增用户信息
router.post('/addPersonInfo', infoHandles.addPersonInfo)
//删除用户信息
router.post('/delPersonInfo', infoHandles.delPersonInfo)
//修改用户信息
router.post('/modifyPersonInfo', infoHandles.modifyPersonInfo)

module.exports = router