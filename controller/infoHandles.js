const mysql = require('mysql');
const systemContants = require("../constants/systemContants")
const infoHandles = {
    //查询个人用户信息
    queryPersonInfo(req, res){
        console.log("queryPersonInfo")
        let db = mysql.createConnection(systemContants.mysqlConfig);
        db.connect((function (err) {
            if (err) {
                console.log("err" + err.stack);
                return;
            }
            console.log("connection id " + db.threadId);
          }));
          db.query( "select * from info", function(err, rows, fields) {
            if (err) throw err;
            console.log('The solution is: ', rows[0]);
          });
        res.send()
    },
    //查询所有用户信息
    queryAllPersonInfo(req, res){
        res.send(req.body)
    },
    //新增用户信息
    addPersonInfo(req, res){
        res.send(req.body)
    },
    //删除用户信息
    delPersonInfo(req, res){
        res.send(req.body)
    },
    //修改用户信息
    modifyPersonInfo(req, res){
        res.send(req.body)
    },
}
module.exports = infoHandles;