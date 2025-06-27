const express = require("express");
const { faker } = require('@faker-js/faker');

const router = express.Router();

//** Products */
router.get('/', (req, res) => {
    const products = [];
    const { size } = req.query;
    const limit = size || 10;
    for (let i = 0; i < limit; i++) {
        products.push({
            name: faker.commerce.product(),
            price: parseInt(faker.commerce.price({ min: 10000, max: 50000, dec: 0 }), 10),
            image: faker.image.url()
        });
    }
    res.json(products);
});

// Los endpoints específicos deben ir antes de los dinámicos
router.get('/filter', (req, res) => {
    res.send('Filter en products');
})

// Endpoints dinámicos(:key)
router.get('/:id', (req, res) => {
    const { id } = req.params;
    if (id == 999) {
        res.status(404).json({
            message: 'Not Found'
        });
    }
    res.json({
        id: id,
        name: 'Product 2',
        price: 1500
    });
});

// Posts
router.post('/', (req, res) => {
    const body = req.body;
    res.status(201).json({
        message: 'Created',
        data: body
    });
});

// Patch
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: 'Update (patch)',
        data: body,
        id: id
    });
});

// Patch
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: 'Update (patch)',
        data: body,
        id: id
    });
});

// Delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: 'Product Deleted',
        id: id
    });
});


module.exports = router;
