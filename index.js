console.log("My index app");

const express = require("express");
const {faker} = require('@faker-js/faker');

const app = express();
const port = 3000;
const characters = [
    {
        id: 1,
        name: "Shigeo",
        lastname: "Kageyama",
        alias: "Mob",
        description: "Estudiante de secundaria con inmensos poderes psíquicos. Lucha por controlar sus emociones.",
        image: "https://static.wikia.nocookie.net/mob-psycho-100/images/b/b7/Mob_Fullbody.png/revision/latest?cb=20220513153327",
        powerLevels: [
            {
                level: "10%",
                image: "https://static.wikia.nocookie.net/death-battle-en-espanol/images/3/3f/Mob.png/revision/latest?cb=20191016173307&path-prefix=es",
                description: "Mob liberando el 10% de su poder, como en la pelea contra Teru."
            },
            {
                level: "100%",
                image: "images/mob_100_percent.png",
                description: "Mob al 100%, desatando todo su poder psíquico."
            },
            {
                level: "???%",
                image: "images/mob_mystery_percent.png",
                description: "Estado desconocido y extremadamente poderoso."
            }
        ]
    },
    {
        id: 2,
        name: "Arataka",
        lastname: "Reigen",
        description: "Autoproclamado psíquico y jefe de Mob. Aunque no tiene poderes, es muy astuto.",
        image: "images/reigen.png"
    },
    {
        id: 3,
        name: "Ritsu",
        lastname: "Kageyama",
        description: "Hermano de Mob. Inicialmente sin poderes, pero luego despierta habilidades psíquicas.",
        image: "images/ritsu.png"
    },
    {
        id: 4,
        name: "Teruki",
        lastname: "Hanazawa",
        alias: "Teru",
        description: "Psíquico muy fuerte. Tras una pelea inicial, se convierte en aliado de Mob.",
        image: "images/teru.png"
    },
    {
        id: 5,
        name: "Dimple",
        lastname: "",
        description: "Espíritu inicialmente malvado que luego se vuelve compañero de Mob, con intenciones dudosas.",
        image: "images/dimple.png"
    },
    {
        id: 6,
        name: "Tsubomi",
        lastname: "Takane",
        description: "Amiga y crush de Mob. Siempre lo trata con naturalidad, sin importar sus poderes.",
        image: "images/tsubomi.png"
    },
    {
        id: 7,
        name: "Tome",
        lastname: "Kurata",
        description: "Presidenta del Club de Telepatía de la escuela. Fascinada por lo sobrenatural.",
        image: "images/tome.png"
    },
    {
        id: 8,
        name: "Musashi",
        lastname: "Gouda",
        description: "Amable y fuerte, siempre motiva a Mob y a sus compañeros a superar sus límites.",
        image: "images/musashi.png"
    },
    {
        id: 9,
        name: "Shou",
        lastname: "Suzuki",
        description: "Hijo de Toichirou Suzuki. Aunque comienza como enemigo, luego lucha junto a Mob.",
        image: "images/shou.png"
    },
    {
        id: 10,
        name: "Ryo",
        lastname: "Shimazaki",
        description: "Psíquico ciego, parte de la élite de Claw. Tiene percepción extrasensorial y teleportación.",
        image: "images/shimazaki.png"
    },
    {
        id: 11,
        name: "Katsuya",
        lastname: "Serizawa",
        description: "Ex miembro de Claw que, tras ser derrotado, se une a Reigen como asistente.",
        image: "images/serizawa.png"
    },
    {
        id: 12,
        name: "Keiji",
        lastname: "Mogami",
        description: "Un esper que tras morir se convirtió en un poderoso y vengativo espíritu.",
        image: "images/mogami.png"
    },
    {
        id: 13,
        name: "Toichirou",
        lastname: "Suzuki",
        description: "Padre de Shou y el líder supremo de Claw. Uno de los psíquicos más fuertes de la serie.",
        image: "images/toichirou.png"
    }
];
app.get('/', (req, res) => {
    res.send('Hola desde mi server en express');
})

app.get('/nueva-ruta', (req, res) => {
    res.send('Hola, este es el contenido de nueva ruta');
})

app.get('/characters', (req, res) => {
    res.json(characters);
})

app.get('/characters/:id', (req, res) => {
    const { id } = req.params;
    res.json(characters.find(character => character.id == id))
});


//** Products */
app.get('/products', (req, res) => {
    const products = [];
    const {size} = req.query;
    const limit = size || 10;
    for(let i = 0; i < limit; i++){
        products.push({
            name: faker.commerce.product(),
            price: parseInt(faker.commerce.price({min: 10000, max: 50000, dec: 0}), 10),
            image: faker.image.url()
        });
    }
    res.json(products);
});

// Los endpoints específicos deben ir antes de los dinámicos
app.get('/products/filter')

// Endpoints dinámicos(:key)
app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id: id,
        name: 'Product 2',
        price: 1500
    })
});

//** Categories  */

app.get('/categories/:categoryId/products/:productId', (req, res) => {
    const { categoryId, productId } = req.params;
    res.json({
        categoryId,
        productId,
        name: 'Product 2',
        price: 1500
    })
});


app.get('/users', (req, res) => {
    const {limit, offset} = req.query;
    if(limit && offset){
        res.json({
            limit,
            offset
        })
    }else{
        res.send('No hay parámetros');
    }
});

app.listen(port, () => {
    console.log('Running on port: ' + port);
});

