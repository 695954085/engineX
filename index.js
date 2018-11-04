const express = require('express');
const path = require('path');
const app = express();

app.get('/', express.static(path.join(__dirname, './public'), {
    dotfiles: 'deny',
}))

app.listen(3000, function () {
    console.log('正在监听3000端口');
})