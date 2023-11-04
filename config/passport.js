const passport = require("passport")
const Doctor = require("../models/doctors")

//Cofiguring passport
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;    
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

//Setting up passport authentication.
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    Doctor.findOne({ _id: jwt_payload.id }) 
        .then(function(user) {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        })
        .catch(function(error) {
            console.log('Error:', error);
            return done(error, false);
        });
}));



module.exports = passport