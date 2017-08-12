var fs = require('fs');//引用fs
var path = require('path');//路径
var content = process.argv[2];//目录
var ext = process.argv[3];//后缀名
//读取目录
fs.readdir(content,function(err,list){
    if(err){
        throw err;//异步抛出
    }

    for(var i=0; i<list.length; i++) {
        var file = list[i];//下标
        //路径.后缀名（文件）绝对等...
        if (path.extname(file) === '.' + ext) {
            console.log(file);
        }
    }
});
