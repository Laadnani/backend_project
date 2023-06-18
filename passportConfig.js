const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const passport = require ('passport');

function initializePassport(passport, getUserByEmail, getUserById) {
    const authenticateUser = async (email, password, done) => {

        const user = getUserByEmail(email)

            if(user == null) {
                return done(null, false, { message: 'No user with this email found'})
            }

            try {
                if (await bcrypt.compare(password)) {

                    done (null, false, {message : 'password incorrect'} )
                } else {
                    return done (null, user)
                }

            } catch (error) {
              return  done (error)
            }

    }
passport.use(new LocalStrategy ({ usernameField: "email"}, 
authenticateUser))
passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser((id, done) =>done(null, getUserById(id)))
}

module.exports = initializePassport;