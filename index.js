const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/oi', (req, res) => {
    res.send('Olá Mundo!')
})

const lista = ['Rick Sanchez', 'Morty Smith', 'Summer Smith'];

app.get('/item', (req, res) => {
    res.send(lista)
})

app.listen(3000)