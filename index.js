const express = require('express');
const routerApi = require('./routes')

const app = express();
const port = 3000;

// Para los posts (middleware json de express)
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola desde mi server en express');
})

routerApi(app);

app.listen(port, () => {
    console.log('Running on port: ' + port);
});

