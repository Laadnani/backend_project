const express = require ('express');
const router = require('./modules/routes.js');


const app = express ();
const PORT = 5050;

app.use(express.json());

app.use(express.static('Pages/loginPage'));


app.get('/', (req, res) => {
    res.redirect('/login.html')

});

app.use('/api/v1', router );

app.listen(PORT, () => console.log('server lunched and listening on port' + PORT));