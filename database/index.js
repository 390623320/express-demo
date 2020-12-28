const mysql = require('mysql');
const systemContants = require("../constants/systemContants")
let db; 
!db && (function(){
        db = mysql.createConnection(systemContants.mysqlConfig);
        db.connect((function (err) {
            if (err) {
                console.log("err" + err.stack);
                return;
            }
            console.log("connection id " + db.threadId);
          }));
          return db;
})();
module.exports.db = {
    dbInstance:db,
    query(sql,cb){
        db.query(sql,function(err, rows, fields){
            if (err) throw err;
            let dataString = JSON.stringify(rows);
            let data = JSON.parse(dataString);
            cb&&cb(data);
        });
    }
}