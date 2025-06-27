const { faker } = require('@faker-js/faker');

class ProductsService {
    constructor() {
        this.products = [];
        this.generate();
    }
    generate() {
        const limit = 40;
        for (let i = 0; i < limit; i++) {
            this.products.push({
                id: faker.string.uuid(),
                name: faker.commerce.product(),
                price: parseInt(faker.commerce.price({ min: 10000, max: 50000, dec: 0 }), 10),
                image: faker.image.url()
            });
        }
    }
    create(data) {
        const newProduct = {
            id: faker.string.uuid(),
            ...data
        }
        this.products.push(newProduct);
        return newProduct;
    }
    find() {
        return this.products;
    }
    findOne(id) {
        return this.products.find(item => item.id == id);
    }
    update(id, changes) {
        const index = this.products.findIndex(item => item.id == id);
        if (index == -1) {
            throw new Error('Product Not Found');
        }
        const product = this.products[index];
        this.products[index] = {
            ...product,
            ...changes
        };
        return this.products[index];
    }
    delete(id) {
        const index = this.products.findIndex(item => item.id == id);
        if (index == -1) {
            throw new Error('Product Not Found');
        }
        this.products.splice(index, 1);
        return {message: `Product Deleted - Product id ${id}`}
    }
}

module.exports = ProductsService;
