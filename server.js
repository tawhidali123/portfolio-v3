const express = require('express');

const app = express();

const host = '127.0.0.1';
const port = process.env.port || 3000;

const router = require('./routes/routes.js');

app.use('/', router);

app.use('/public', express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './templates');






app.listen(port, host, () =>{
    console.log(`Copy this into your browser if it doesnt open automaticaly -> ${host}:${port}`)
})
