const express = require("express");
const router = express.Router();
const ProductsService = require('./../services/products.service');
const service = new ProductsService();
const validatorHandler = require('./../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schema');

//** Products */
// Find
router.get('/', async (req, res) => {
    const products = await service.find();
    res.json(products);
});

// FindOne
router.get('/:id',
    validatorHandler(getProductSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await service.findOne(id);
            res.json(product);
        } catch (error) {
            next(error);
        }
    }
);

// Create
router.post('/',
    validatorHandler(createProductSchema, 'body'),
    async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
});


// Update
router.patch('/:id',
    validatorHandler(getProductSchema, 'params'),
    validatorHandler(updateProductSchema, 'body'),
    async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const product = await service.update(id, body);
        res.json(product);
    } catch (error) {
        next(error);
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const message = await service.delete(id);
    res.json(message);
});

// Put
/* router.put('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: 'Update (patch)',
        data: body,
        id: id
    });
});
 */

module.exports = router;
