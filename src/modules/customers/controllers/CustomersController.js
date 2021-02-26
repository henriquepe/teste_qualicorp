const Customer = require('../infra/mongoose/models/index.js');

exports.create = async(nome, cpf, email, celular, endereco) => {

    try{
        const customerModel = new Customer({
        nome,
        cpf,
        celular,
        email,
        endereco
    });

        await customerModel.save();

        return customerModel;
    }
    catch(err){
        throw new Error(err.message)
    }

}

exports.read = async() => {

    try{
        
        const customers = await Customer.find();

        return customers;
    
    }
    catch(err){
        throw new Error('Customers not found')
    }

}

exports.update = async(_id, nome, email, cpf, endereco, celular) => {

    const customer = await Customer.findById(_id)

    if(!customer) {
        throw new Error('Customer do not exists')
    }


    Object.assign(customer, {
        nome,
        cpf,
        email,
        celular,
        endereco
    })

    customer.save();

    return customer;
}

exports.delete = async(_id) => {


    const customer = await Customer.findByIdAndRemove(_id)

    if(!customer) {
        throw new Error('Customer do not exists')
    }

    return customer;

   

}