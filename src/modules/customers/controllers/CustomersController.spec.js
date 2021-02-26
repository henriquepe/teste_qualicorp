
const mongoose = require('mongoose');

const Customer = require('../infra/mongoose/models/index.js');



describe('CustomerController', () => {

    let uri = "mongodb+srv://rosa1702:rosa1702@qualicorpdb.m7oe2.mongodb.net/testeJEST"

    beforeAll(async () => {
        await mongoose.connect(uri, { useNewUrlParser: true })
      });


    it('should create a new user', async() => {

        const customerModel = new Customer({
            nome: 'Henrique',
            cpf: '12345678',
            celular: '123454657',
            email: 'henrique@gmail.com',
            endereco: {
                rua: 'rua alguma, 775',
                cidade: 'osasco',
                cidade: 'sp'
            }
        });  


        await customerModel.save();
        
        expect(customerModel).toHaveProperty('_id');
        expect(customerModel.nome).toBe('Henrique')
             
    })

    it('should list users', async() => {
        

        const customers = await Customer.find();

        expect(customers).toEqual(expect.anything())
    
        
             
    })

    it('should update an user', async() => {

        const customerModel = new Customer({
            nome: 'Henrique',
            cpf: '12345678',
            celular: '123454657',
            email: 'henrique@gmail.com',
            endereco: {
                rua: 'rua alguma, 775',
                cidade: 'osasco',
                cidade: 'sp'
            }
        });  


        await customerModel.save();
        

        const customer = await Customer.findById(customerModel._id)

        
        Object.assign(customer, {
            nome: 'José',
            cpf: '10987654321',
            email: 'jose@email.com',
            celular: '998765432',
            endereco: {
                rua: 'rua outra, 577',
                cidade: 'sp',
                cidade: 'sp'
            }
        })

        customer.save();

        expect(customer.nome).toBe('José')

        return customer;
    
        
             
    })

})



// describe('CustomerController', () => {

//     it('should update users', () => {

        
        
//         const customer = update({
//             _id: "123",
//             nome: 'Henrique',
//             email: 'henrique@gmail.com',
//             endereco: {
//             rua: 'rua alguma, 775',
//             cidade: 'osasco',
//             estado: 'sp'
//             },
//             cpf: '12345678910',
//             celular: '9123454657'
//         });

//         expect(customer).toStrictEqual({
//             _id: "123",
//             nome: 'Henrique',
//             email: 'henrique@email.com',
//             endereco: {
//               rua: 'Rua Jesuino 775',
//               cidade: 'Osasco',
//               estado: 'sp'
//             },
//             cpf: '12345678910',
//             celular: '9123454657'
//           });
             
//     })


// })