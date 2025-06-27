const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

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
                image: faker.image.url(),
                isBlock: faker.datatype.boolean()
            });
        }
    }
    async create(data) {
        const newProduct = {
            id: faker.string.uuid(),
            ...data
        }
        this.products.push(newProduct);
        return newProduct;
    }
    async find() {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(this.products);
            }, 2500);
        })
    }
    async findOne(id) {
        const product = this.products.find(item => item.id == id);
        if(!product){
            throw boom.notFound('Product Not Found');
        }
        if(product.isBlock){
            throw boom.conflict('Product is blocked');
        }
        return product;
    }
    async update(id, changes) {
        const index = this.products.findIndex(item => item.id == id);
        if (index == -1) {
            throw boom.notFound('Product Not Found');
        }
        const product = this.products[index];
        this.products[index] = {
            ...product,
            ...changes
        };
        return this.products[index];
    }
    async delete(id) {
        const index = this.products.findIndex(item => item.id == id);
        if (index == -1) {
            throw boom.notFound('Product Not Found');
        }
        this.products.splice(index, 1);
        return {message: `Product Deleted - Product id ${id}`}
    }
}

module.exports = ProductsService;
