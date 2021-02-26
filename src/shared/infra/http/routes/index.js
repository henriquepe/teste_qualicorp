const { Router } = require('express')
const customersRouter = require('../../../../modules/customers/infra/http/routes/customers.routes');
const rootRouter = Router()

rootRouter.use('/customers', customersRouter)

module.exports= rootRouter