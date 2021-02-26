const express = require('express')

const customersRouter = express.Router()

const CustomersController = require('../../../controllers/CustomersController');


customersRouter.get('/', async(request, response) => {

    try{const customers = await CustomersController.read();

    return response.status(200).json(customers)}catch(err){
        return response.status(404).json({error: err.message})
    }


});

customersRouter.post('/create', async(request, response) => {

    try{const { nome, cpf, email, celular, endereco } = request.body;

    const user = await CustomersController.create(nome, cpf, email, celular, endereco);

    return response.status(201).json({user})}catch(err){
        return response.status(406).json({error: err.message})
    }


});

customersRouter.put('/update/:_id', async(request, response) => {


    try{
        
        const { _id } = request.params
        const { nome, email, cpf, endereco, celular} = request.body;

        const customer = await CustomersController.update(_id, nome, email, cpf, endereco, celular)

        return response.status(200).json(customer);
    }
    
    catch(err){
        return response.status(406).json({error: err.message})
    }


});

customersRouter.delete('/delete/:_id', async(request, response) => {

    try{
        
        const { _id } = request.params

        const removedCustomer = await CustomersController.delete(_id)

        return response.status(410).json({
            delete: removedCustomer,
            message: 'Was deleted'
        })
    }
    catch(err){
        console.log(err)
        return response.status(410).json({error: err.message})
    }


});

module.exports = customersRouter;