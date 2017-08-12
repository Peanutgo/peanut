var mymodule = require('./app');//引入app.js文件
var content = process.argv[2];
var ext = process.argv[3];
mymodule(content,ext,function(err,data){
    if(err)
        return console.error('ERROR:',err);

    data.forEach(function(file){
        console.log(file);
    })
});