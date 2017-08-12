var express = require('express');//引用express
var app = express();//创建express()名为app的应用程序

//主页输出
app.get('/',function(req,res){
    res.send('hello world');
    // console.log('txt',req.body);
});
app.listen(3000,function(){
    console.log("node is OK");
})