const express = require('express');
const cors = require('cors');
const routerApi = require('./routes')

const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

// Para los posts (middleware json de express)
app.use(express.json());

app.get('/api', (req, res) => {
    res.send('Hola desde mi server en express');
})

routerApi(app);
const whitelist = ['http://localhost','http://localhost:8080','http://localhost:3000'];
const options = {
    origin: (origin, callback)=>{
        if(whitelist.includes(origin)){
            callback(null, true);
        }else{
            callback(new Error('Origen no permitido'));
        }
    }
}
app.use(cors());

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
    console.log('Running on port: ' + port);
});

module.exports = app;
