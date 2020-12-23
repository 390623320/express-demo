// 一级路由处理
const routes = [//路由表
    {
        path:"/home",
        file:require("./home")
    },
    {
        path:"/infoTable",
        file:require("./infoTable")
    },
];
function routerFn(app){
    routes.forEach(element => {
        app.use(element.path,element.file);
    });
}
module.exports = routerFn;