console.log(process.argv);//获取当前进程的这个数组
var result = 0;
//for循环从第三个元素(index是2)开始循环，依次累加，直到数组末尾
for (var i=2;i<process.argv.length;i++){
    result += Number(process.argv[i]);//Number()将process.argv中的数组元素字符串强制转化为数字
}
console.log(result);