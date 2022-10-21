const fs = require('fs')

//普通回调函数
// fs.readFile('./resource/content.txt', (err, data) => {
//     //如果出错，抛出错误
//     if (err) throw err
//     //输出文件内容
//     console.log(data.toString());
// })

//promise
new Promise((res, rej) => {
    fs.readFile('./resource/content.txt', (err, data) => {
        //如果出错
        if (err) rej(err)
        //如果成功
        res(data)
    })
}).then(value => {
    console.log(value.toString());
}, reason => {
    console.log(reason);
})

