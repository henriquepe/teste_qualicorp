const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const customerSchema = new Schema({
    nome: {
        type: String
    },
    cpf: {
        type: String
    },
    celular: {
        type: String
    },
    email: {
        type: String,
    },
    endereco: {
        rua: {
            type: String,
        },
        cidade: {
            type: String,
        },
        estado: {
            type: String
        }
    }

})

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;