const express = require('express')

const app = express()

app.all('/', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    const data = {
        name: 'guigu',
        age: 20,
    }
    response.send(data)
})

app.listen('8000', () => {
    console.log('服务已启动');
})