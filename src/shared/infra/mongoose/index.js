const mongoose = require('mongoose');

let url = "";

console.log(process.env.DATABASE_URL_LOCAL)

if(process.env.NODE_ENV === 'production'){
    url = process.env.DATABASE_URL_CLOUD;
}
else {
    url = process.env.DATABASE_URL_LOCAL;
    
}

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log(`banco de dados conectado com sucesso!`)
})