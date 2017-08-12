var http = require('http');
var url = process.argv[2];
http.get(url,function(res){
    //
    response = res.setEncoding('utf-8');
    response.on('data',function (data) {
        console.log(data);
    });
    response.on('err',function (err) {
        throw err;
    });
    response.on('end',function (end) {
        console.log(end);
    });
})