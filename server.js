const express = require ('express');
const router = require('./modules/routes.js');
const bcrypt = require('bcrypt');
const pool = require('./modules/databasepg.js');
const initializePassport = require('./passportConfig.js');
const passport = require('passport');
const session = require ('express-session');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');


const app = express ();
const PORT = 5050;
app.set('view-engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ urlencoded: false}));
app.use(session( {
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());



// login in strategy 

app.use(new LocalStrategy ({
    usernameField: 'email',
    passwordField: 'password',
}, 
    function (email, password, done) {
        pool.query('')
    }))

// views on the home page 

app.get('/', (req, res) => {
    res.send('home Page')

});

// views on the login page 

app.get('/login', (req,res) => {
    res.render('login.ejs')

});

// views on the login page  to authenticate 

app.post('/login', passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login',
}));


// views on the register page 
app.get('/register', (req,res, next) => {
    res.render('register.ejs')

});

// registration page on the form 
app.post('/register',  async (req,res) => {
    try { 
        const hashedpass = await bcrypt.hash(req.body.password, 10);
       await pool.query('INSERT INTO customers VALUES (uuid_generate_v4(), $1, $2, $3, $4, $5) ', [ req.body.firstname, req.body.lastname, req.body.username, req.body.email, hashedpass] );
        // user successfully registered
            res.redirect('/login');
    } catch (error) {
        console.log('error occured duting registration', error);
    }
});

app.use('/api/v1', router );

app.listen(PORT, () => console.log('server lunched and listening on port' + PORT));