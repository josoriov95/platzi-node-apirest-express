const express = require("express");
const router = express.Router();
const ProductsService = require('./../services/products.service');
const service = new ProductsService();

//** Products */
// Find
router.get('/', async (req, res) => {
    const products = await service.find();
    res.json(products);
});

// FindOne
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await service.findOne(id);
        res.json(product);
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
});

// Create
router.post('/', async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
});


// Update
router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const product = await service.update(id, body);
        res.json(product);
    } catch (error) {
        res.status(404).json({message: error.message});
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
