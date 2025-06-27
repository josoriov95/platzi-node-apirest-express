const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');

const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();

// Middleware para permitir POST JSON
app.use(express.json());

// Configuración de CORS
const whitelist = ['http://localhost', 'http://localhost:8080', 'http://localhost:3000'];
const options = {
    origin: (origin, callback) => {
        if (!origin || whitelist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Origen no permitido'));
        }
    },
};
app.use(cors(options));

// Ruta base de prueba
app.get('/', (req, res) => {
    res.send('Hola desde mi server Express en Vercel');
});

// Tus rutas API
routerApi(app);

// Middlewares de errores
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// Exportar para serverless
module.exports = app;
module.exports.handler = serverless(app);
