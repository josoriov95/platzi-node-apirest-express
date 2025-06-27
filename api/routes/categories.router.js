const express = require('express');
const router = express.Router();

//** Categories  */
router.get('/:categoryId/products/:productId', (req, res) => {
    const { categoryId, productId } = req.params;
    res.json({
        categoryId,
        productId,
        name: 'Product 2',
        price: 1500
    })
});

module.exports = router;
