const {createProductSchema, updateProductSchema, getProductSchema} = require('./../schemas/product.schema')
const boom = require('@hapi/boom');

function validatorHandler(schema, prop){
    return (req, res, next) => {
        const data = req[prop];
        const {error} = schema.validate(data, {abortEarly: false});
        if(error){
            next(boom.badRequest(error));
        }
        else{
            next();
        }
    }
}

module.exports = validatorHandler;
