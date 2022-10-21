/* 
封装一个函数 mineReadeFile读取文件内容
参数：path 文件路径
返回：promise对象
*/

//封装
function mineReadeFile(path) {
    return new Promise((resolve, reject) => {
        require('fs').readFile(path, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

//读取文件
mineReadeFile('./resource/content.txt')
    .then(value => {
        console.log(value.toString());
    }, reason => {
        console.error(reason);
    })