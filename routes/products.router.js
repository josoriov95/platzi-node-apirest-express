const express = require("express");
const router = express.Router();
const ProductsService = require('./../services/products.service');
const service = new ProductsService();

//** Products */
// Find
router.get('/', (req, res) => {
    const products = service.find();
    res.json(products);
});

// FindOne
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const product = service.findOne(id);
    res.json(product);
});

// Create
router.post('/', (req, res) => {
    const body = req.body;
    const newProduct = service.create(body);
    res.status(201).json(newProduct);
});


// Update
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const product = service.update(id, body);
    res.json(product);
});

// Delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const message = service.delete(id);
    res.json(message);
});

// Put
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: 'Update (patch)',
        data: body,
        id: id
    });
});

module.exports = router;
