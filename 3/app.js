var fs = require("fs");//引入fs
var result = fs.readFileSync(process.argv[2],'utf-8');//同步获取进程中从第三个元素(index是2)开始的参数
console.log(result.split('\n').length);//输出行数结果