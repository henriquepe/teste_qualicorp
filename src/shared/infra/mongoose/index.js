const mongoose = require('mongoose');

const url = 'mongodb://localhost:27018/qualicorp_db';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    `banco de dados conectado com sucesso!`
})