var fs = require('fs');//引入fs
var path = require('path');
//module.exports 封装一个自定义模块，导出目录，扩展名，回调函数
module.exports = function(dir,ext,callback){
    fs.readdir(dir,function(err,data){
        if(err)
            return callback(err);//尽早返回错误并跳出
        //如果没有错误，处理'data'
        data = data.filter(function (file){
            return path.extname(file) === '.' + ext;
        });
        callback(null,data);//传递null作为callback的第一个参数
    })
};