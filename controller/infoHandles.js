const {db} = require("../database/index.js");
const systemContants = require("../constants/systemContants");
const { fail,success } = systemContants.code;
const infoHandles = {
    //查询个人用户信息
    queryPersonInfo(req, res){
        const { name } = req.body;
        if(name){
            db.query( `select * from info where name = "${name}";`, function(data) {
                if(data.length > 0 ){
                    res.send(
                        {
                            sta:success,
                            message:"",
                            data:data[0]
                        }
                        );
                }else{
                    res.send(
                        {
                            sta:fail,
                            message:"请输入正确查询的名称",
                            data:null
                        }
                    )
                }
            });
        }else{
            res.send(
                {
                    sta:fail,
                    message:"请输入查询的名称",
                    data:null
                }
            )
        }
    },
    //查询所有用户信息
    queryAllPersonInfo(req, res){
        db.query( "select * from info", function(data) {
            res.send(data);
        });
    },
    //新增用户信息
    addPersonInfo(req, res){
        const { name,age,address } = req.body;
        if(name && age && address){
            db.query(`INSERT INTO info ( name, age,address ) VALUES  ( "${name}", ${age}, "${address}" );`,(data)=>{
                res.send({
                    sta:success,
                    message:"",
                    data:null
                })
            })   
        }else{
            res.send({
                sta:fail,
                message:"请输入name,age,address",
                data:null
            })
        }
    },
    //删除用户信息
    delPersonInfo(req, res){
        const { name } = req.body;
        if(name){
            db.dbInstance.query(`delete from info where name = "${name}";`,(err, rows, fields)=>{
                if (err) throw err;
                res.send({
                    sta:success,
                    message:"",
                    data:null
                })
            })   
        }else{
            res.send({
                sta:fail,
                message:"请输入name",
                data:null
            })
        }
    },
    //修改用户信息
    modifyPersonInfo(req, res){
        const { name,originalName } = req.body;
        if(name && originalName){
            db.dbInstance.query(`update info set name = "${name}" where name = "${originalName}";`,(err, rows, fields)=>{
                if (err) throw err;
                res.send({
                    sta:success,
                    message:"",
                    data:null
                })
            })   
        }else{
            res.send({
                sta:fail,
                message:"请输入name && originalName",
                data:null
            })
        }
    },
}
module.exports = infoHandles;