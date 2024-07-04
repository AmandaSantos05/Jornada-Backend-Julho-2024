const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/oi', (req, res) => {
    res.send('Olá Mundo!');
})

const lista = ['Rick Sanchez', 'Morty Smith', 'Summer Smith'];

app.get('/item', (req, res) => {
    res.send(lista);
})

app.post('/item', (req, res) => {
    const item = req.body.nome;
    lista.push(item);
    res.send('Item criado com sucesso!')
});

app.get('/item/:id', (req, res) => {
    const id = req.params.id

    const item = lista[id - 1]
    res.send(item)

    console.log(id)
})

app.listen(3000);