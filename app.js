const app = require('./config/server');
const express = require('express');
const cors = require('cors')

app.use(cors());
app.use(express.static(__dirname + '/public'));


let rotaHome = require('./routes/home')(app);
let rotaProdutos = require('./routes/produtos')(app);
let rotaMeusPedidos = require('./routes/meuspedidos')(app);
let rotaLojas = require('./routes/lojas')(app);
let rotaFaleConosco = require('./routes/faleconosco')(app);

app.listen(3002, () => {
    console.log('Servidor rodando na posta: 3002');
})