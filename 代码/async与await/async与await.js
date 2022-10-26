/* 
读取 resource下的 1.html 2.html 3.html
*/
const fs = require('fs')

//Node.js 内置的 util 模块有一个 promisify() 方法，
//该方法将基于回调的函数转换为基于 Promise 的函数。
//就是将回调函数转换为promise函数
const util = require('util')
const mineReadFile = util.promisify(fs.readFile)

//原生回调函数
// fs.readFile('./resource/1.html', (err, data1) => {
//     if (err) throw err
//     fs.readFile('./resource/2.html', (err, data2) => {
//         if (err) throw err
//         fs.readFile('./resource/3.html', (err, data3) => {
//             if (err) throw err
//             console.log(data1 + data2 + data3);
//         })
//     })
// })

//async与awiat
// async function main() {
//     //读取文件内容
//     //只要有一个出错，需要包裹try...catch
//     try {
//         let data1 = await mineReadFile('./resource/1.html')
//         let data2 = await mineReadFile('./resource/2.html')
//         let data3 = await mineReadFile('./resource/3.htl')
//         console.log(data1 + data2 + data3);
//     } catch (error) {
//         console.log(error);
//     }
// }
// main()

//原生promise
// 将三个promise定义成函数，可以再调用的时候再执行，实现依次执行

function p1() {
    // 函数直接返回promise对象，就可以写成“p1().then”的形式
    return new Promise((resolve, reject) => {
        fs.readFile('./resource/1.html', (err, result) => {
            resolve(result)
        })
    });
}

function p2() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resource/2.html', (err, result) => {
            resolve(result)
        })
    });
}

function p3() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resource/3.html', (err, result) => {
            resolve(result)
        })
    });
}

p1().then((r1) => {
    console.log(r1.toString());
    // 返回p2()，直接用链式编程
    return p2();
})
    .then((r2) => {
        console.log(r2.toString());
        return p3();
    })
    .then((r3) => {
        console.log(r3.toString())
    })

