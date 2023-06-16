const express = require ('express');
const router = require('./modules/routes.js');



const app = express ();
const PORT = 5050;

app.use(express.json());

app.get('/', (req, res, next) => {
    res.send('Home Page')
});

app.use('/api/v1', router );

app.listen(PORT, () => console.log('server lunched and listening on port' + PORT));