const express = require('express');

const app = express();

app.get('/', function (req, res, next) {
    res.send('haha');
})

app.listen(3000, function () {
    console.log('正在监听3000端口');
})