const express = require ('express');
const router = require('./modules/routes.js');


const app = express ();
const PORT = 5050;

app.use(express.json());

app.set('view-engine', 'ejs');


app.get('/', (req, res) => {
    res.send('home Page')

});


app.get('/login', (req,res, next) => {
    res.render('login.ejs')

});

app.get('/register', (req,res, next) => {
    res.render('register.ejs')

});


app.use('/api/v1', router );

app.listen(PORT, () => console.log('server lunched and listening on port' + PORT));