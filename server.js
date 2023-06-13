const express = require ('express');
const   route = require('./modules/routes.js');

const app = express ();

const PORT = 5050;

app.get('/', (req, res, next) => {
    res.send('Home Page')
});

app.use('/api/v1/routes', route );

app.listen(PORT, () => console.log('server lunched and listening on port' + PORT));