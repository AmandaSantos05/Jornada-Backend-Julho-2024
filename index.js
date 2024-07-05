const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

const dbUrl = 'mongodb+srv://amanda280721:hBxAeKKuJnWl7EMr@cluster0.tb3bspx.mongodb.net';
const dbName = 'ocean-jornada-backend';

const client = new MongoClient(dbUrl);

async function main() {

    console.log('Conectando ao banco de dados...');
    client.connect();
    console.log('Banco de dados conectado com sucesso!');

    app.use(express.json());

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.get('/oi', (req, res) => {
        res.send('Olá Mundo!');
    });

    const lista = ['Rick Sanchez', 'Morty Smith', 'Summer Smith'];

    const db = client.db(dbName);
    const collection = db.collection('item');

    // Read All - [GET] /item
    app.get('/item', async (req, res) => {
        const documentos = await collection.find().toArray();
        res.send(documentos);
    });

    app.post('/item', (req, res) => {
        const item = req.body.nome;
        lista.push(item);
        res.send('Item criado com sucesso!');
    });

    app.get('/item/:id', (req, res) => {
        const id = req.params.id;

        const item = lista[id - 1];
        res.send(item);
    });

    app.put('/item/:id', (req, res) => {
        const id = req.params.id;

        const novoItem = req.body.nome;

        lista[id - 1] = novoItem;
        res.send('Item atualizado com sucesso!');
    })

    app.listen(3000);
}

main()
